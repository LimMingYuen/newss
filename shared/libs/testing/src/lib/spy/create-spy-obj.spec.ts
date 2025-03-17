import { createSpyObj } from './create-spy-obj';

interface Foobar {
  get value(): string;

  foo(): string;

  bar(): void;
}

describe('createSpyObj', () => {
  it('create spy obj', () => {
    const spyObj = createSpyObj<Foobar>('name', ['foo', 'bar']);

    expect(spyObj).toBeDefined();
    expect(spyObj.foo).toBeDefined();
    expect(spyObj.bar).toBeDefined();
  });

  it('create spy obj with property', () => {
    const spyObj = createSpyObj<Foobar>('name', ['foo', 'bar'], { value: 'value1' });

    expect(spyObj).toBeDefined();
    expect(spyObj.foo).toBeDefined();
    expect(spyObj.bar).toBeDefined();
    expect(spyObj.value).toEqual('value1');
  });

  it('create spy obj with property without type', () => {
    const spyObj = createSpyObj('name', ['foo', 'bar'], { value: 'value1' }) as Foobar;

    expect(spyObj).toBeDefined();
    expect(spyObj.foo).toBeDefined();
    expect(spyObj.bar).toBeDefined();
    expect(spyObj.value).toEqual('value1');
  });

  it('create spy obj with function mocks', () => {
    const spyObj = createSpyObj('name', {'foo' : 'res1', 'bar' : 'res2' }, { value: 'value1' }) as Foobar;
  });
});
