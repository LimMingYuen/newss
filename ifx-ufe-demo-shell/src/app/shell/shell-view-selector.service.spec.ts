import { TestBed } from '@angular/core/testing';

import { ShellViewSelectorService } from './shell-view-selector.service';
import { createSpyObj, SpyObj } from '@ifx/testing';
import { DataCommunicationService, ShellCommunicatorService, UfeCommand } from 'ifx-ufe';
import { BehaviorSubject } from 'rxjs';

describe('ShellViewSelectorService', () => {
  let service: ShellViewSelectorService;
  let mockShellCommmunicatorService: SpyObj<ShellCommunicatorService>;
  let mockDataCommunicationService: SpyObj<DataCommunicationService>;
  let mockUfeCommands: BehaviorSubject<UfeCommand>;

  beforeEach(() => {
    mockShellCommmunicatorService = createSpyObj('ShellViewSelectorService', {});
    mockUfeCommands = new BehaviorSubject<UfeCommand>(new UfeCommand());
    mockDataCommunicationService = createSpyObj('DataCommunicationService', {
      ufeCommands: mockUfeCommands.asObservable(),
    });

    TestBed.configureTestingModule({
      providers: [
        { provide: ShellCommunicatorService, useValue: mockShellCommmunicatorService },
        { provide: DataCommunicationService, useValue: mockDataCommunicationService },
      ],
    });
    service = TestBed.inject(ShellViewSelectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
