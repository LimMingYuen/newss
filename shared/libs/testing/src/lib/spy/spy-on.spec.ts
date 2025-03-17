import { spyOn } from './spy-on';

class Foobar {
  private _value = 'value1';
  get value(): string {
    return this._value;
  }

  set value(value: string) {
    this._value = value;
  }

  private foo(): string {
    return 'foo';
  }

  bar(): void {
    // do nothing
  }
}

describe('spyOn', () => {
  it('spy on property', () => {
    const object = new Foobar();
    const spy = spyOn(object, 'value');
    object.value;

    expect(spy).toBeDefined();
    expect(spy).toHaveBeenCalled();
  });

  it('spy on property get', () => {
    const object = new Foobar();
    const spy = spyOn(object, 'value', 'get');
    object.value;

    expect(spy).toBeDefined();
    expect(spy).toHaveBeenCalled();
  });

  it('spy on property set', () => {
    const object = new Foobar();
    const spy = spyOn(object, 'value', 'set');
    object.value = 'val';

    expect(spy).toBeDefined();
    expect(spy).toHaveBeenCalledWith('val');
  });

  it('spy on public function', () => {
    const object = new Foobar();
    const spy = spyOn(object, 'bar', 'func');
    object.bar();

    expect(spy).toBeDefined();
    expect(spy).toHaveBeenCalled();
  });

  it('spy on private function', () => {
    const object = new Foobar();
    const spy = spyOn(object, 'foo', 'func');
    object['foo']();

    expect(spy).toBeDefined();
    expect(spy).toHaveBeenCalled();
  });
});
