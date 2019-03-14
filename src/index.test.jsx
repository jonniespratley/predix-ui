import {
  omit, mapToCssModules, isFunction, setGlobalCssModule
} from './utils';


describe('Utils', () => {
  test('omit - should return object with keys removed', () => {
    const obj1 = { name: 'jonnie', age: 31, sex: 'male' };
    const obj2 = omit(obj1, 'age');
    expect(!obj2.age);
  });
  test('mapToCssModules - should return string of classnames', () => {
    expect(mapToCssModules('test', { color: 'red' })).toEqual('test');
    expect(mapToCssModules('test1')).toEqual('test1');
    expect(mapToCssModules('')).toEqual('');
  });
  test('setGlobalCssModule - should set value on globalCssModule', () => {
    expect(setGlobalCssModule('test1')).toEqual('test1');
  });
  test('isFunction - should return true if passed if function', () => {
    function test() {
      return true;
    }
    expect(isFunction(test)).toEqual(true);
    expect(isFunction('test')).toEqual(false);
  });
});
