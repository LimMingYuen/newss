export interface LoggingConfigurationInterface {
    logLevel: IfxUfeLogLevel;
    loggingSinks: IfxUfeLoggingSink[];
}
export declare enum IfxUfeLogLevel {
    DEBUG = 0,
    INFO = 1,
    WARN = 2,
    ERROR = 3,
    OFF = 4
}
export interface IfxUfeLoggingSink {
    name: string;
    level: IfxUfeLogLevel;
}
