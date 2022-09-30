import { leastPath } from './LeastPath';

it('correctly determines the least path', () => {
  expect(
    leastPath(['5', 'A', 'B', 'C', 'D', 'F', 'A-B', 'A-C', 'B-C', 'C-D', 'D-F'])
  ).toBe('A-C-D-F');
  expect(leastPath(['4', 'A', 'C', 'D', 'X', 'A-C', 'A-D', 'D-X', 'A-X'])).toBe(
    'A-X'
  );
});
