import { removeDuplicateAdjacent } from './RemoveDuplicateAdjacent';

test('validates if duplicate adjacent characters are removed', () => {
  expect(removeDuplicateAdjacent('abcd', 2)).toBe('abcd');
  expect(removeDuplicateAdjacent('deeedbbcccbdaa', 3)).toBe('aa');
});
