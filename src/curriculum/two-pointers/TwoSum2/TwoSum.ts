export function twoSum2(numbers: number[], target: number): number[] {
  const cache = new Map<number, number>();

  for (let i = 0; i < numbers.length; i++) {
    const idx1 = cache.get(target - numbers[i]);
    cache.set(numbers[i], i + 1);

    if (idx1) {
      return [idx1, cache.get(numbers[i])!];
    }
  }

  return [];
}