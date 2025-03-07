import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { IfxUfeAuthGuard } from './ifx-ufe-auth.guard';
import * as i0 from "@angular/core";
export declare class IfxUfeClaimsAuthGuard extends IfxUfeAuthGuard {
    private readonly claimService;
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<IfxUfeClaimsAuthGuard, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<IfxUfeClaimsAuthGuard>;
}
