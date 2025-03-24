export const environment = {
  production: true,
  wrlEnv: window['wrlConfig' as any]['env' as any] as unknown as string,
  wrlSite: window['wrlConfig' as any]['site' as any] as unknown as string,
  wrlConfigPath: window['wrlConfig' as any]['configPath' as any] as unknown as string,
};
