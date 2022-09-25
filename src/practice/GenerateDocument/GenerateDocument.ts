/**
 * You're given a string of available characters and a string representing a document that you need to generate. Write a function that determines if you can generate the document using the available characters. If you can generate the document, your function should return true ; otherwise, it should return false
 * You're only able to generate the document if the frequency of unique characters in the characters string is greater than or equal to the frequency of unique characters in the document string. For
 * example, if you're given characters = "abcabc" and document = "aabbccc" you cannot
 * generate the document because you're missing one
 * 
 * The document that you need to create may contain any characters, including special characters, capital letters, numbers, and spaces.
 * Note: you can always generate the empty string ("")
 * 
 * RUNTIME AND SPACE COMPLEXITY
 * O(n + m) | O(c) -- n is number of characters, m is length of documents and c is the number of unique characters in the string
 */


export const generateDocument = (characters: string, document: string): boolean => {
  const charMap = new Map<string, number>();

  for (let char of characters) {
    const mappedChar = charMap.get(char);
    if (mappedChar) {
      charMap.set(char, mappedChar + 1);
    } else {
      charMap.set(char, 1);
    }
  }

  for (let char of document) {
    const mappedChar = charMap.get(char);

    if (!mappedChar) return false;

    charMap.set(char, mappedChar - 1);
  }

  return true;
};