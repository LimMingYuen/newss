import { JwtDecodeOptionsInterface } from './jwt-decode-options.interface';
import { JwtHeaderInterface } from './jwt-header.interface';
import { IfxJwtPayloadInterface } from './jwt-payload.interface';
/**
 * this class is used to convert the base64 encoded string of a JWT to a JSON object
 * the code is takken from
 * https://github.com/auth0/jwt-decode/blob/v4.0.0/lib/index.ts
 */
export declare class JwtDecoder {
    private static b64DecodeUnicode;
    private static base64UrlDecode;
    static decode<T = JwtHeaderInterface>(token: string, options: JwtDecodeOptionsInterface & {
        header: true;
    }): T;
    static decode<T = IfxJwtPayloadInterface>(token: string, options?: JwtDecodeOptionsInterface): T;
    static decodeSafe<T = JwtHeaderInterface | IfxJwtPayloadInterface>(token: string | undefined | null, options?: JwtDecodeOptionsInterface, logErrors?: boolean): T;
}
