import { shuffleString } from './ShuffleString';

test('determine if string is correctly shuffled', () => {
  expect(shuffleString('codeleet', [4, 5, 6, 7, 0, 2, 1, 3])).toBe('leetcode');
  expect(shuffleString('abc', [0, 1, 2])).toBe('abc');
});
