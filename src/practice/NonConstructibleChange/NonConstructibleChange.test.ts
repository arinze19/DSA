import { nonConstructiblechange } from './NonConstructibleChange';

it('correctly calculates the non constructible change in an array of coins', () => {
  expect(nonConstructiblechange([5, 7, 1, 1, 2, 3, 22])).toBe(20);
  expect(nonConstructiblechange([1, 1, 1, 1, 1])).toBe(6);
  expect(nonConstructiblechange([6, 4, 5, 1, 1, 8, 9])).toBe(3);
  expect(nonConstructiblechange([])).toBe(1);
  expect(nonConstructiblechange([87])).toBe(1);
  expect(nonConstructiblechange([2])).toBe(1);
  expect(nonConstructiblechange([1, 2, 3, 4, 5, 6, 7])).toBe(29);
  expect(
    nonConstructiblechange([109, 2000, 8765, 19, 18, 17, 16, 8, 1, 1, 2, 4])
  ).toBe(87);
});
