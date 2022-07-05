/**
 * You are given a string array words and a string s, where words[i] and s comprise only of lowercase English letters.
 * Return the number of strings in words that are a prefix of s.
 * A prefix of a string is a substring that occurs at the beginning of the string.
 * A substring is a contiguous sequence of characters within a string.
 *
 *
 * SAMPLE INPUT
 * words = ["a","b","c","ab","bc","abc"], s = "abc"
 *
 * SAMPLE OUTPUT
 * 3
 * 
 * TIME AND SPACE COMPLEXITY
 * O(n * m) | O(n)
 */

export const countPrefixes = (words: string[], s: string): number => {
  const results: string[] = [];

  for (let i = 0; i < words.length; i++) {
    let word = '';
    for (let j = 0; j < words[i].length; j++) {
      if (words[i][j] === s[j]) {
        word += words[i][j];
      } else {
        word = '';
        break;
      }
    }

    results.push(word);
  }

  return results.filter(item => item !== '').length;
};