import { containerWithMostWater } from './ContainerWithMostWater';

it('computes the container with the most water', () => {
  expect(containerWithMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
  expect(containerWithMostWater([1, 1])).toBe(1);
});
