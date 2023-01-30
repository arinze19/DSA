export const getNthFib = (n: number): number => {
  const cache = [0];
  if (n === 1) {
    return cache[cache.length - 1];
  } else if (n === 2) {
    cache.push(1);
    return cache[cache.length - 1];
  } else {
    cache.push(1);
    for (let i = 1; i < n - 1; i++) {
      cache.push(cache[i] + cache[i - 1]);
    }
  }

  return cache[cache.length - 1];
};
