import { insertionSort } from './InsertionSort';

it('correctly sorts an array by insertion sort', () => {
  expect(insertionSort([8, 5, 2, 9, 5, 6, 3])).toEqual([2, 3, 5, 5, 6, 8, 9]);
  expect(insertionSort([2, 1])).toEqual([1, 2]);
  expect(
    insertionSort([
      -7, 2, 3, 8, -10, 4, -6, -10, -2, -7, 10, 5, 2, 9, -9, -5, 3, 8,
    ])
  ).toEqual([-10, -10, -9, -7, -7, -6, -5, -2, 2, 2, 3, 3, 4, 5, 8, 8, 9, 10]);
});
