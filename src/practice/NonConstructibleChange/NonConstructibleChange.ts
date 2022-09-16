/**
 * Given an array of positiv integers representing the values of coins in your possession
 * write a function that returns the minimum amount of change(min amount of sum of money)
 * that you CANNOT create. Given the coins have any positive integer value and aren't necessarily
 * unique
 *
 * SAMPLE INPUT
 * [1,2,5]
 *
 * SAMPLE OUTPUT
 * 4
 *
 * RUNTIME AND SPACE COMPLEXITY
 * O(nlogn) time | O(1) space
 */

export const nonConstructiblechange = (coins: number[]) => {
  coins.sort((a, b) => a - b);
  let leastConstructibleChange = 0;

  for (let coin of coins) {
    if (coin > leastConstructibleChange + 1) {
      return leastConstructibleChange + 1;
    }

    leastConstructibleChange += coin;
  }

  return leastConstructibleChange + 1;
};
