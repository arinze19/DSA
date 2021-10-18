import { isPalindrome } from '../src/algorithms/recursions/Palindrome';

test('Determines if a string is a palindrome', () => {
  expect(isPalindrome('motor')).toBe(false);
  expect(isPalindrome('rotor')).toBe(true);
});
