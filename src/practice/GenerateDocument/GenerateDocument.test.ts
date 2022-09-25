import { generateDocument } from './GenerateDocument';

it('correctly predicts if a document is generatable', () => {
  expect(
    generateDocument('Bste!hetsi ogEAxpelrt x ', 'AlgoExpert is the Best!')
  ).toBe(true);
  expect(generateDocument('a', 'a')).toBe(true);
  expect(generateDocument('a hsgalhsa sanbjksbdkjba kjx', '')).toBe(true);
  expect(generateDocument('     ', '     ')).toBe(true);
  expect(
    generateDocument('Bste!hetsi ogEAxpert', 'AlgoExpert is the Best!')
  ).toBe(false);
});
