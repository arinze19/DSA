/**
 * Write an algorithm to determine if a number n is happy.
 * A happy number is a number defined by the following process:
 * Starting with any positive integer, replace the number by the sum of the squares of its digits.
 * Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
 * Those numbers for which this process ends in 1 are happy.
 * Return true if n is a happy number, and false if not.
 *
 * SAMPLE INPUT
 * num = 19
 *
 * SAMPLE OUTPUT
 * true
 *
 * RUNTIME AND SPACE COMPLEXITY
 * ???
 */

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
