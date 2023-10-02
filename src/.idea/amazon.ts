// =================== Amazon Internship OA, September 2023 ===================
export function stockSpike(prices: number[], k: number) {
  let count = 0;
  const initial = [...prices];
  prices.sort((a, b) => a - b);

  /**
   * By sorting and comparing the position of the index on both original and clone array
   * we can determine if the price is a spike.
   *
   * Example:
   * original = [1, 2, 8, 5, 3, 4]
   * clone = [1, 2, 3, 4, 5, 8]
   *
   * starting the loop from k [prices.length - k because we don't want to count the last k elements], we can compare the position of the index on both array
   * if the position of the index on the original array is greater than the position of the index on the clone array
   * then we can say that the price is a spike.
   * comparing from element 8 to element 5 in the above example
   */

  for (let i = k; i < prices.length - k; i++) {
    if (initial[i] > prices[i]) {
      count += 1;
    }
  }

  return count;
}
