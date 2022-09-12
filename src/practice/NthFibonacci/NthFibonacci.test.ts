import { getNthFib } from './NthFibonacci';

it('correctly finds the nth fibonacci number', () => {
  expect(getNthFib(6)).toBe(5);
  expect(getNthFib(1)).toBe(0);
  expect(getNthFib(3)).toBe(1);
  expect(getNthFib(4)).toBe(2);
  expect(getNthFib(7)).toBe(8);
  expect(getNthFib(9)).toBe(21);
  expect(getNthFib(15)).toBe(377);
});
