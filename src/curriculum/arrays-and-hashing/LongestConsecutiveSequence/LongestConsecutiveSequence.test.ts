import { longestConsecutiveSequence } from './LongestConsecutiveSequence';

it('It correctly predicts the longest sequence in an array', () => {
  expect(longestConsecutiveSequence([100, 4, 200, 1, 3, 2])).toBe(4);
  expect(longestConsecutiveSequence([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])).toBe(9);
  expect(longestConsecutiveSequence([])).toBe(0);
});
