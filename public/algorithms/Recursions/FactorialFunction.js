"use strict";
// for-loop
var loopFactorial = function (n) {
    var result = 1;
    for (var i = 1; i <= n; i++) {
        result = result * i;
    }
    return result;
};
// recursive call
const recursiveFactorial = function (n) {
    if (!n)
        return 1;
    return recursiveFactorial(n - 1) * n;
};
console.log(recursiveFactorial(5));
