import * as i0 from "@angular/core";
export declare class StyleSheetAndLinkCaptureService {
    constructor();
    /**
     * getStyleSheets finds all links where rel='stylesheet' (i.e. remote stylesheets) in this document, packages
     * them into an array, and returns the array
     * @param doc
     */
    getStyleSheets(doc: Document): HTMLElement[];
    /**
     * getLinks finds all link tags in this document, packages them into an array and returns the array
     * @param doc
     */
    getLinks(doc: Document): HTMLElement[];
    /**
     * getScripts finds all script tags in this document, packages them into an array and returns the array
     * @param doc
     */
    getScripts(doc: Document): HTMLElement[];
    /**
     * getStyleBlocks finds all stylesheet tags in this document, packages them into an array, and returns the array
     * @param doc
     */
    getStyleBlocks(doc: Document): HTMLElement[];
    static ɵfac: i0.ɵɵFactoryDeclaration<StyleSheetAndLinkCaptureService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StyleSheetAndLinkCaptureService>;
}
