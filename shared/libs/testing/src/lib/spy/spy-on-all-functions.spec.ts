import { spyOnAllFunctions } from './spy-on-all-functions';

class Foobar {
  private _value = 'value1';
  get value(): string {
    return this._value;
  }

  set value(value: string) {
    this._value = value;
  }

  foo(): string {
    return 'foo';
  }

  bar(): void {
    // do nothing
  }
}

describe('spyOnAllFunctions', () => {
  it('create spy obj', () => {
    const object = new Foobar();
    const spyObj = spyOnAllFunctions(object);

    object.foo();
    object.bar();

    expect(spyObj).toBeDefined();
    expect(spyObj.foo).toBeDefined();
    expect(spyObj.foo).toHaveBeenCalled();
    expect(spyObj.bar).toBeDefined();
    expect(spyObj.bar).toHaveBeenCalled();
  });
});
