import { validPalindrome } from './ValidPalindrome';

it('correctly predicts if a string is a palindrome', () => {
  expect(validPalindrome('A man, a plan, a canal: Panama')).toBe(true);
  expect(validPalindrome('0P')).toBe(false);
  expect(validPalindrome('ab_a')).toBe(true);
});
