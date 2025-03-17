import { SpyObj } from './spy-obj';
import { MethodLikeKeys, spyOn as spyOn_2 } from 'jest-mock';

export function spyOnAllFunctions<T extends object>(object: T, includeNonEnumerable = true): SpyObj<T> {
  if (!object) {
    throw new Error('spyOnAllFunctions could not find an object to spy upon');
  }

  let pointer = object,
    propsToSpyOn: MethodLikeKeys<Required<T>>[] = [],
    properties,
    propertiesToSkip: MethodLikeKeys<Required<T>>[] = [];

  while (pointer && (!includeNonEnumerable || pointer !== Object.prototype)) {
    properties = getProps(pointer, includeNonEnumerable);
    properties = properties.filter((prop) => propertiesToSkip.indexOf(prop) === -1);
    propertiesToSkip = propertiesToSkip.concat(properties);
    propsToSpyOn = propsToSpyOn.concat(getSpyableFunctionProps(pointer, properties));
    pointer = Object.getPrototypeOf(pointer);
  }

  for (const prop of propsToSpyOn) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    spyOn_2(object, prop as any).mockImplementation(() => undefined as any);
  }

  return object as SpyObj<T>;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getProps<T extends { [key: string]: any }, M extends MethodLikeKeys<Required<T>>>(object: T, includeNonEnumerable: boolean): M[] {
  const enumerableProperties = Object.keys(object);

  if (!includeNonEnumerable) {
    return enumerableProperties.map((k) => k as M).filter((k) => !!k);
  }

  return Object.getOwnPropertyNames(object)
    .filter((prop) => prop !== 'constructor' || enumerableProperties.indexOf('constructor') > -1)
    .map((p) => p as M);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getSpyableFunctionProps<T extends { [key: string]: any }, M extends MethodLikeKeys<Required<T>>>(object: T, propertiesToCheck: M[]): M[] {
  const props: M[] = [];

  for (const prop of propertiesToCheck) {
    if (Object.prototype.hasOwnProperty.call(object, prop) && isSpyableProp(object, prop)) {
      props.push(prop);
    }
  }
  return props;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isSpyableProp<T extends { [key: string]: any }, M extends MethodLikeKeys<Required<T>>>(object: T, prop: M): boolean {
  let value;
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value = object[prop] as any;
  } catch (e) {
    return false;
  }

  if (value instanceof Function) {
    const descriptor = Object.getOwnPropertyDescriptor(object, prop);
    return (!!descriptor?.writable || !!descriptor?.set) && !!descriptor.configurable;
  }
  return false;
}
