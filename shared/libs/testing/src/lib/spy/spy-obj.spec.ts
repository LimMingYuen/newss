import { SpyObj } from './spy-obj';

interface TestObject {
  value: string;
  number: number;
}

describe('SpyObj', () => {
  it('should create an instance', () => {
    const spyObj: SpyObj<TestObject> = {
      value: 'value',
      number: 12,
    };

    expect(spyObj).toBeTruthy();
  });
});
