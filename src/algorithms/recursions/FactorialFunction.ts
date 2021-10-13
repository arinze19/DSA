// for-loop

const loopFactorial = function (n: number): number {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result = result * i;
  }

  return result;
};

// recursive call
const recursiveFactorial = function (n: number): number {
  if (!n) return 1;

  return recursiveFactorial(n - 1) * n;
};

console.log(recursiveFactorial(5));
