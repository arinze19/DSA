import { minimumWaitingTime } from './MinimumWaitingTime';

test('minimum waiting time works', () => {
  expect(minimumWaitingTime([3, 2, 1, 2, 6])).toBe(17);
  expect(minimumWaitingTime([2, 1, 1, 1])).toBe(6);
  expect(minimumWaitingTime([1, 2, 4, 5, 2, 1])).toBe(23);
  expect(minimumWaitingTime([1, 1, 1, 1, 1])).toBe(10);
  expect(minimumWaitingTime([1, 1, 1, 4, 5, 6, 8, 1, 1, 2, 1])).toBe(81);
});
