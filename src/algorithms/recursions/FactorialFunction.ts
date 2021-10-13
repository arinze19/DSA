// for-loop

var loopFactorial = function (n: number): number {
  var result = 1;

  for (var i = 1; i <= n; i++) {
    result = result * i;
  }

  return result;
};

// recursive call
const recursiveFactorial = function (n: number): number {
  if (!n) return 1;

  return recursiveFactorial(n - 1) * n;
};

console.log(recursiveFactorial(5))
