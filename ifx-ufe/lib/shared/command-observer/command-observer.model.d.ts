import { UfeCommand } from '../../models/UfeCommand';
export type UfeCommandObserverType = 'SHELL' | 'PEER' | 'SELF';
export declare class UfeCommandObserverItem extends UfeCommand {
    type: UfeCommandObserverType;
}
