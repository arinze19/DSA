import { validParentheses } from './ValidParentheses';

test('validates if a sequence of string characters are valid parentheses', () => {
  expect(validParentheses('[)')).toBeFalsy();
  expect(validParentheses('({})')).toBeTruthy();
  expect(validParentheses('(){}{}')).toBeTruthy();
  expect(validParentheses('}}')).toBeFalsy();
});
