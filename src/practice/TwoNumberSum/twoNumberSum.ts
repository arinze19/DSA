// O(n ^ 2) RUNTIME
export const twoNumberSum = (array: number[], targetSum: number): number[] => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === targetSum) {
        return [array[i], array[j]];
      }
    }
  }
  return [];
};

// O(n) RUNTIME
export const twoNumberSum2 = (array: number[], targetSum: number) => {
  for (let i = 0; i < array.length; i++) {
    const secondIdx = array.indexOf(targetSum - array[i], i + 1);
    if (secondIdx !== -1) {
      return [array[i], array[secondIdx]];
    }
  }

  return []
};
