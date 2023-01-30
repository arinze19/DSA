export const generateDocument = (
  characters: string,
  document: string
): boolean => {
  const charMap = new Map<string, number>();

  for (const char of characters) {
    const mappedChar = charMap.get(char);
    if (mappedChar) {
      charMap.set(char, mappedChar + 1);
    } else {
      charMap.set(char, 1);
    }
  }

  for (const char of document) {
    const mappedChar = charMap.get(char);

    if (!mappedChar) return false;

    charMap.set(char, mappedChar - 1);
  }

  return true;
};
