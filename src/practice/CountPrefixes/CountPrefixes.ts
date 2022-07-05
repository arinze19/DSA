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
    let pointer = 0;
    let count = 0;
  
    do {
      let isPrefix = false;
  
      for (let i = 0; i < words[pointer].length; i++) {
        if (words[pointer][i] === s[i]) {
          isPrefix = true;
        } else {
          isPrefix = false;
          break;
        }
      }
  
      if (isPrefix) {
        count++;
      }
  
      pointer++;
    } while (pointer < words.length);
  
    return count;
};