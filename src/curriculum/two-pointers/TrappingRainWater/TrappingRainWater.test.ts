import { trappingRainWater } from './TrappingRainWater';

it('correctly detemine the number of cells that can trap rain water', () => {
  expect(trappingRainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6);
  expect(trappingRainWater([4, 2, 0, 3, 2, 5])).toBe(9);
});
