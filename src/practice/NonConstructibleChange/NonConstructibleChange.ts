export const nonConstructiblechange = (coins: number[]) => {  coins.sort((a, b) => a - b);
  let leastConstructibleChange = 0;

  for (const coin of coins) {
    if (coin > leastConstructibleChange + 1) {
      return leastConstructibleChange + 1;
    }

    leastConstructibleChange += coin;
  }

  return leastConstructibleChange + 1;
};
