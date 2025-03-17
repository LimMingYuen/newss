import { PropertyLikeKeys, SpyInstance, spyOn as spyOn_2 } from 'jest-mock';

export function spyOn<T extends object, M extends PropertyLikeKeys<T>>(
  object: T,
  methodName: M | any,
  accessType?: 'get' | 'set' | 'func'
): SpyInstance<() => T[M]> | SpyInstance<(arg: T[M]) => void> {
  if (accessType === 'set') {
    // TODO: remove cast as any mit jest 29.x
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return spyOn_2(object, methodName as any, 'set');
  }

  // TODO: remove cast as any mit jest 29.x
  return accessType !== 'func' ?
    spyOn_2(object, methodName as any, 'get') :
    spyOn_2(object, methodName as any);
}
