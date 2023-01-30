export const minimumWaitingTime = (queries: number[]): number => {
  queries.sort((a, b) => a - b);
  let cummulative = 0;

  for (let i = 0; i < queries.length; i++) {
    let altCummulative = 0;

    for (let j = 0; j < i; j++) {
      altCummulative += queries[j];
    }

    cummulative += altCummulative;
  }

  return cummulative;
};
