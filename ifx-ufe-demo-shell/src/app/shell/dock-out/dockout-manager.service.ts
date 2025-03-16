import { inject, Injectable } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  ShellCommunicatorService,
  DataCommunicationService,
  AppDescription,
  UfeCommand,
  WindowRefTuple,
  IfxUfeLoggerService,
} from 'ifx-ufe';
import { Observable, filter, map, startWith } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DockoutManagerService {
  private comm = inject(ShellCommunicatorService);
  private data = inject(DataCommunicationService);

  private activeUfe: WindowRefTuple[] = [];
  private pendingUfe: AppDescription[] = [];
  private messageBuffer: UfeCommand[] = [];
  private logger = inject(IfxUfeLoggerService);

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() {
    this.data
      .ufeCommands()
      .pipe(takeUntilDestroyed())
      .subscribe(cmd => {
        if (cmd.command == 'DOCKOUT_REPLY') {
          this.completeDockout(cmd);
        }

        if (cmd.command == 'UFE_READY' && this.activeUfe.some(ufe => ufe.name == cmd.sender)) {
          this.onDockoutReady(cmd);
        }
      });
  }

  public selectIsDialogOpen(app?: AppDescription): Observable<boolean> {
    return this.data.ufeCommands().pipe(
      filter(
        cmd => cmd.sender === app?.combinedName && (cmd.command == 'OPEN_DIALOG' || cmd.command === 'CLOSE_DIALOG')
      ),
      map(cmd => cmd.command === 'OPEN_DIALOG'),
      startWith(false)
    );
  }

  /**
   * public interface to dockout a uFE.  Sends a request to this uFE for the information required to create a dockout
   * @param app AppDescription of the uFE to be docked out
   */
  public dockoutUfe(app: AppDescription) {
    const request = new UfeCommand('SHELL', 'DOCKOUT_REQUEST', []);
    this.pendingUfe.push(app);
    this.comm.sendChildMessage(request, app);
  }

  /**
   * logout will log outall open dockout uFE
   */
  public logout() {
    const msg = new UfeCommand('SHELL', 'LOGOUT', []);
    this.activeUfe.forEach(ufe => {
      ufe.ref!.postMessage(msg, '*');
      ufe.ref!.close();
    });
  }

  /**
   * completeDockout takes a UfeCommand of DOCKOUT_REPLY and spawns the docked out uFE
   * @param cmd UfeCommand
   * @private
   */
  private completeDockout(cmd: UfeCommand) {
    if (cmd.params.length > 1) {
      this.bufferDockoutParams(cmd);
    }

    let appIndex = this.pendingUfe.findIndex(app => app.combinedName == cmd.sender);
    if (appIndex == -1) {
      this.logger.warn('No matching pending uFE was found for DOCKOUT_REPLY', cmd.sender);
      return;
    }

    let app: AppDescription = this.pendingUfe[appIndex];

    //change the default url for the uFE to the current url which should reflect the uFE's current state
    app.url = cmd.params[0];
    this.pendingUfe.splice(appIndex, 1);

    this.spawnWindow(app);
  }

  /**
   * bufferDockoutParams will create a DOCKOUT_CONFIG command and add it to the message buffer from this UfeCommand.
   * Note, this only applies to UfeCommands with more than one parameter in their params array
   * @param cmd: UfeCommand
   * @private
   */
  private bufferDockoutParams(cmd: UfeCommand) {
    let msg = new UfeCommand('SHELL', 'DOCKOUT_CONFIG', [cmd.sender]);
    for (let i = 1; i < cmd.params.length; ++i) {
      msg.params.push(cmd.params[i]);
    }
    this.messageBuffer.push(msg);
  }

  /**
   * spawnWindow will open a new window for this uFE and configure it as a dockout
   * @param app: AppDescription - the uFE to be opened in the new window
   * @private
   */
  private spawnWindow(app: AppDescription) {
    let finalUrl = app.url + '?_ifxEnvironment=NATIVE_SHELL&_ifxHeader=false';
    let dockoutRef = window.open(finalUrl, '_blank', 'popup');
    if (!dockoutRef) {
      throw new Error('Unable to open uFE in dockout window');
    }
    let winRef = new WindowRefTuple(app.combinedName, dockoutRef, app.url, 'NATIVE_SHELL');

    this.activeUfe.push(winRef);
    this.pruneDeadRefs();
  }

  /**
   * pruneDeadRefs scans through the activeUfe array and removes any references to windows that have been closed
   * @private
   */
  private async pruneDeadRefs() {
    for (let i = 0; i < this.activeUfe.length; ++i) {
      if (this.activeUfe[i].ref!.closed) {
        this.activeUfe.splice(i, 1);
        --i;
      }
    }
  }

  private onDockoutReady(cmd: UfeCommand) {
    const ufeRef = this.activeUfe.find(ufe => ufe.name == cmd.sender && !ufe.isLoaded);
    if (!ufeRef) {
      // throw new Error("No matching WindowRefTuple for UFE_READY command");
      return;
    }

    ufeRef.isLoaded = true;

    let bufMsgIdx = this.messageBuffer.findIndex(msg => msg.params[0] == ufeRef.name);
    if (bufMsgIdx > -1) {
      ufeRef.ref!.postMessage(this.messageBuffer[bufMsgIdx], '*');
      this.messageBuffer.splice(bufMsgIdx, 1);
    }
  }
}
