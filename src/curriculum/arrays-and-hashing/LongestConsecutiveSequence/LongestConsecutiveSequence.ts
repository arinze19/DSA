export function longestConsecutiveSequence(nums: number[]): number {
  let sequence = 0;
  const set = new Set<number>();

  for (let i = 0; i < nums.length; i++) {
    if (!set.has(nums[i])) {
      set.add(nums[i]);
    }
  }

  for (const item of set) {
    let current = item;
    let localSequence = 1;
    if (!set.has(item - 1)) {
      while (set.has(current + 1)) {
        localSequence += 1;
        current = current + 1;
      }

      if (localSequence > sequence) {
        sequence = localSequence;
      }
    }
  }

  return sequence;
}
