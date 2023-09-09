import { evalPolishNotation } from './EvalPolishNotation';

test('validates if polish notation is evaluated accurately', () => {
  expect(evalPolishNotation(['2', '1', '+', '3', '*'])).toBe(9);
  expect(evalPolishNotation(['4', '13', '5', '/', '+'])).toBe(6);
  expect(
    evalPolishNotation([
      '10',
      '6',
      '9',
      '3',
      '+',
      '-11',
      '*',
      '/',
      '*',
      '17',
      '+',
      '5',
      '+',
    ])
  ).toBe(22);
  expect(evalPolishNotation(['4', '-2', '/', '2', '-3', '-', '-'])).toBe(-7);
});
