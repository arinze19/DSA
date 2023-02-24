export function containerWithMostWater(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let currentArea = Math.min(height[left], height[right]) * right - left;
  while (left < right) {
    if (height[left] <= height[right]) {
      left += 1;
    } else if (height[left] > height[right]) {
      right -= 1;
    }

    currentArea = Math.max(
      currentArea,
      Math.min(height[left], height[right]) * (right - left)
    );
  }

  return currentArea;
}
