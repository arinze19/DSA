import { countPrefixes } from './CountPrefixes';

it('Returns correct count of prefixes', () => {
  expect(countPrefixes(['a', 'b', 'c', 'ab', 'bc', 'abc'], 'abc')).toBe(3);
});
