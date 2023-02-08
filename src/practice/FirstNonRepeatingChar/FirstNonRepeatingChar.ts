// export const firstNonRepeatingCharacter = (string: string): number => {
//   for (let i = 0; i < string.length; i++) {
//     const char = string.charAt(i);
//     if (string.indexOf(char) == i && string.indexOf(char, i + 1) === -1)
//       return i;
//   }

//   return -1;
// };

export const firstNonRepeatingCharacter = (n: string): number => {
  const cache: { [n: string]: { count: number; index: number } } = {};

  for (let i = 0; i < n.length; i++) {
    if (cache[n[i]]) {
      cache[n[i]].count += 1;
    } else {
      cache[n[i]] = { count: 1, index: i };
    }
  }

  for (const item in cache) {
    if (cache[item].count == 1) return cache[item].index;
  }

  return -1;
};
