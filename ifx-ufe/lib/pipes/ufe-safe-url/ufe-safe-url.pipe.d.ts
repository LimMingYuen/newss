import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class UfeSafeUrlPipe implements PipeTransform {
    private sanitizer;
    hostnamePattern: string;
    private logger;
    /** Inserted by Angular inject() migration for backwards compatibility */
    constructor(...args: unknown[]);
    transform(url: string): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<UfeSafeUrlPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<UfeSafeUrlPipe, "ifxUfeSafeUrl", true>;
}
