/**
 * Given a non-empty string of lowercase letters and non-negative 
 * integer representing a key, write a function that returns a 
 * new string obtained by shifting every letter in the input string by k 
 * positions in the alphabet, where k is the key
 * 
 * Note that letters should wrap around the alphabet; In other words
 * the letter z shifted by 1 would end up being a
 * 
 * TIME AND SPACE COMLEXITY
 * O(n) time | O(n) space
 */

export const caesarCipher = (string: string, key: number): string => {
  let cipher = '';

  for (let i = 0; i < string.length; i++) {
    let characterCode = string.charCodeAt(i) + key;

    while (characterCode > 122) {
      characterCode -= 26;
    }

    cipher += String.fromCharCode(characterCode);
  }

  return cipher;
};
