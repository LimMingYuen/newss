import { UfeCommand } from '../../models/UfeCommand';
export interface CommandHandlerInterface {
    handleCommand(command: UfeCommand): void;
    canProcess(): boolean;
}
