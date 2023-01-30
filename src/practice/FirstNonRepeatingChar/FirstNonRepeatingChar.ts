export const firstNonRepeatingCharacter = (string: string): number => {
  for (let i = 0; i < string.length; i++) {
    const char = string.charAt(i);
    if (string.indexOf(char) == i && string.indexOf(char, i + 1) === -1)
      return i;
  }

  return -1;
};
