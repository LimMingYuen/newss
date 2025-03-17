import { Mock } from 'jest-mock';

export type SpyObj<T> = T & {
  [K in keyof T]: T[K] extends Func ? T[K] & Mock : T[K];
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Func = (...args: any[]) => any;
