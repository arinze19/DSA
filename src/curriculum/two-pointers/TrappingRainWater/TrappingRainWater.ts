export function trappingRainWater(height: number[]): number {
  let result = 0;
  let l = 0,
    r = height.length - 1,
    lMax = height[l],
    rMax = height[r];

  while (l < r) {
    if (height[l] < height[r]) {
      lMax = Math.max(height[l], lMax);
      result += lMax - height[l];
      l += 1;
    } else {
      rMax = Math.max(height[r], rMax);
      result += rMax - height[r];
      r -= 1;
    }
  }

  return result;
}

// input = [0,1,0,2,1,0,1,3,2,1,2,1] | result = 6
// input = [4,2,0,3,2,5] | result = 9
