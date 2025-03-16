import { LoggingConfigurationInterface, UFE_ENVIRONMENT } from 'ifx-ufe';

export const environment = {
  ...UFE_ENVIRONMENT,
  production: false,
  wrlEnv: window['wrlConfig' as any]['env' as any] as unknown as string,
  wrlSite: window['wrlConfig' as any]['site' as any] as unknown as string,
  wrlConfigPath: window['wrlConfig' as any]['configPath' as any] as unknown as string,
  logging: window['logging' as never] as unknown as LoggingConfigurationInterface,
};
