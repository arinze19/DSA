/**
 * Write a function that takes a string in lowercase english-alphabets and
 * returns the index of the strings first non-repeating character.
 * if the string doesn't have a reapeting character, your function should return -1
 *
 * SAMPLE INPUT
 * string = 'abcdcaf'
 *
 * SAMPLE OUTPUT
 * 1
 *
 * TIME AND SPACE COMPLEXITY
 * The optimal time and space complexity for this program is O(n) - time | O(1) - space
 */

export const firstNonRepeatingCharacter = (string: string): number => {
  for (let i = 0; i < string.length; i++) {
    const char = string.charAt(i);
    if (string.indexOf(char) == i && string.indexOf(char, i + 1) === -1)
      return i;
  }

  return -1;
};
