export const nonConstructiblechange = (coins: number[]) => {
  const possibleChange = [];

  for (let i = 0; i < coins.length; i++) {
    possibleChange.push(coins[i]);
    for (let j = 1; j < coins.length; j++) {
      possibleChange.push(coins[i] + coins[j]);
    }
  }

  return possibleChange;
};
