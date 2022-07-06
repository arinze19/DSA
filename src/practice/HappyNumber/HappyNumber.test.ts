import { happyNumber } from './HappyNumber';

it('correctly determines a happy number', () => {
  expect(happyNumber(2)).toBeFalsy();
  expect(happyNumber(19)).toBeTruthy();
  expect(happyNumber(7)).toBeTruthy();
});
