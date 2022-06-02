import { productSum } from './ProductSum';

test('Determine if array is properly summed up', () => {
  expect(productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]])).toEqual(12);
  expect(productSum([1, 2, 3, 4, 5])).toEqual(15);
  expect(productSum([1, 2, [3], 4, 5])).toEqual(18);
  expect(productSum([[1, 2], 3, [4, 5]])).toEqual(27);
  expect(productSum([[[[[5]]]]])).toEqual(600);
  expect(productSum([9, [2, -3, 4], 1, [1, 1, [1, 1, 1]], [[[[3, 4, 1]]], 8], [1, 2, 3, 4, 5, [6, 7], -7], [1, [2, 3, [4, 5]], [6, 0, [7, 0, -8]], -7], [1, -3, 2, [1, -3, 2, [1, -3, 2], [1, -3, 2, [1, -3, 2]], [1, -3, 2]]], -3])).toEqual(1351);
});
