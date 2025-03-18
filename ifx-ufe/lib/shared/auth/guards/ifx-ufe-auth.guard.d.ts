import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { IfxUfeLoggerService } from '../../logging/ifx-ufe-logger.service';
import * as i0 from "@angular/core";
export declare class IfxUfeAuthGuard {
    private readonly authService;
    private readonly authRedirectService;
    protected logger: IfxUfeLoggerService;
    activeConfigId: string;
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<IfxUfeAuthGuard, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<IfxUfeAuthGuard>;
}
