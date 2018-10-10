const flatArray = require('./utils')

test('It should return the same array', () => {
  expect(flatArray([1, 2])).toMatchObject([1, 2]);
});

test('It retrun a flat array', () => {
  expect(flatArray([1, 2, [5, 6]])).toMatchObject([1, 2, 5, 6]);
});

test('It retrun a flat array', () => {
  expect(flatArray([1, '2', [5, 6, 9]])).toThrow('This method only accept numbers.');
});

test('It retrun a flat array', () => {
  var arr = [1, 2, [5, [2, 4, 5], 6, [3, 5, 6,7]]]
  expect(flatArray(arr)).toMatchObject([1, 2, 5, 2, 4, 5, 6, 3, 5, 6, 7]);
});
