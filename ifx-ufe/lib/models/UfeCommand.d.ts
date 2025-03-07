/**
 * UfeCommand provides a structured method for communicating between the shell and the enclosed uFEs.
 */
export declare class UfeCommand {
    sender: string;
    command: string;
    params: any[];
    constructor(snd?: string, cmd?: string, par?: any[]);
}
