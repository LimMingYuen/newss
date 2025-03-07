import { UfeCommandObserverItem } from '../../shared/command-observer/command-observer.model';
import * as i0 from "@angular/core";
export declare class ShowCommandMessagesComponent {
    private commandObserver;
    displayedMessageColumns: string[];
    constructor();
    messages: import("@angular/core").WritableSignal<UfeCommandObserverItem[]>;
    showCommandMessages: import("@angular/core").WritableSignal<boolean>;
    getJsonValue(value: any[]): string;
    onToggleShowMessages(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ShowCommandMessagesComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ShowCommandMessagesComponent, "ifx-ufe-show-command-messages", never, {}, {}, never, never, true, never>;
}
