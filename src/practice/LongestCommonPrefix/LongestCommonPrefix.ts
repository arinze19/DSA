export const longestCommonPrefix = (array: string[]): string => {
  let prefix = '';
  for (let i = 0; i < array[0].length; i++) {
    if (array.every((x) => array[0][i] === x.slice(i, i + 1))) {
      prefix = prefix + array[0][i];
    } else return prefix;
  }

  return prefix;
};
