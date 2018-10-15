const flatArray = require('../utils');

test('It should return the same array', () => {
  expect(flatArray([1, 2])).toMatchObject([1, 2]);
});

test('It retrun a flat array', () => {
  expect(flatArray([1, 2, [5, 6]])).toMatchObject([1, 2, 5, 6]);
});

test('It should return an error', () => {
  expect(flatArray('test')).toBe('There is a type error within your argument');
  expect(flatArray(123213)).toBe('There is a type error within your argument');
  expect(flatArray({ foo: 'bar' })).toBe('There is a type error within your argument');
});

test('It retrun a flat array', () => {
  const arr = [1, 2, [5, [2, 4, 5], 6, [3, 5, 6, 7]]];
  expect(flatArray(arr)).toMatchObject([1, 2, 5, 2, 4, 5, 6, 3, 5, 6, 7]);
});
