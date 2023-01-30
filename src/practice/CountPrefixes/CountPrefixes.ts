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
