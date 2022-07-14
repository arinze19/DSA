/**
 * You are given a string s and an integer array indices of the same length.
 * The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.
 * Return the shuffled string.
 *
 * SAMPLE INPUT
 * s = "codeleet", indices = [4,5,6,7,0,2,1,3]
 *
 *
 * SAMPLE OUTPUT
 * "leetcode"
 *
 * RUNTIME AND SPACE COMPLEXITY
 * O(n) | O(1)
 */

export const shuffleString = (s: string, indices: number[]): string => {
  const cypher = [];
  for (let i = 0; i < s.length; i++) {
    cypher[indices[i]] = s[i];
  }

  return cypher.join('');
};
