/**
 * Write a function that takes in a non-empty array of distinct integers and an integer
 * representing a target sum. If any two numbers in the input array sum up to the target
 * sum, the function should return them in an array, in any order. If no two numbers sum
 * up to the target sum, the function should return an empty array.
 * Note that the target sum has to be obtained by summing two different integers in the
 * array; you can't add a single integer to itself in order to obtain the target sum.
 * You can assume that there will be at most one pair of numbers summing up to the
 * target sum.
 *
 * SAMPLE INPUT
 * array  = [3, 5, -4, 8, 11, 1, -1, 6]
 * target = 10
 *
 * SAMPLE OUTPUT
 * [-1, 11]
 *
 * TIME AND SPACE COMPLEXITY
 * The optimal time and space complexity for this program is O(n) - time | O(n) - space
 */

// O(n ^ 2) RUNTIME
export const twoNumberSum = (array: number[], targetSum: number): number[] => {
  // write code here
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
