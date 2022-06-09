import { binarySearch } from './BinarySearch';

test('binary search correctly finds items in a sorted array', () => {
  expect(binarySearch([1, 2, 3, 4, 5], 5)).toBe(4);
  expect(binarySearch([], 5)).toBe(-1);
  expect(binarySearch([10, 12, 13, 20], 10)).toBe(0);
  expect(binarySearch([1, 2, 3, 4, 5], 10)).toBe(-1);
});
