import { SpyObj } from './spy-obj';
import { Mock, fn } from 'jest-mock';

export function createSpyObj<T>(baseName: string, methodNames: string[] | object): SpyObj<T>;
export function createSpyObj<T>(baseName: string, methodNames: string[] | object): SpyObj<T>;
export function createSpyObj<T>(baseName: string, methodNames: string[] | object, properites: object): SpyObj<T>;
export function createSpyObj(baseName: string, methodNames: string[] | object, properties: object = {}): { [key: string]: Mock } {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const obj: any = {};

  if (Array.isArray(methodNames)) {
    methodNames.forEach((methodName: string) => {
      obj[methodName] = fn();
    });
  } else {
    Object.entries(methodNames).forEach((methodName) => {
      obj[methodName[0]] = fn().mockReturnValue(methodName[1]);
    });
  }

  Object.entries(properties).forEach((entry) => {
    obj[entry[0]] = entry[1];
  });

  return obj;
}
