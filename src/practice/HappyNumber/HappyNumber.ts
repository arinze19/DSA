export const happyNumber = (num: number): boolean => {
  return happyNumberHelper(num);
};

const happyNumberHelper = (num: number, cache: number[] = []): boolean => {
  if (cache.indexOf(num) > -1) return false;

  const sum = num
    .toString()
    .split('')
    .map((n) => Math.pow(+n, 2))
    .reduce((a, b) => a + b, 0);
  cache.push(num);

  if (sum === 1) {
    return true;
  } else {
    return happyNumberHelper(sum, cache);
  }
};
