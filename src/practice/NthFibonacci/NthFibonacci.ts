/**
 * The Fibonacci sequence is defined as follows: the first number of the sequence is ©, the second
 * number is 1, and the nth number is the sum of the (n - 1)th and (n - 2)th numbers. Write a
 * function that takes in an integer n and returns the nth Fibonacci number.
 * Important note: the Fibonacci sequence is often defined with its first two numbers as F0 =
 * 0 and
 * F1 = 1. For the purpose of this question, the first Fibonacci number is F0 ; therefore,
 * getNthFib(1) is equal to F0, getNthFib(2) is equal to F1 , etc.
 */

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


