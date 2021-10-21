"use strict";
// for-loop
Object.defineProperty(exports, "__esModule", { value: true });
exports.recursiveFactorial = exports.loopFactorial = void 0;
var loopFactorial = function (n) {
    var result = 1;
    for (var i = 1; i <= n; i++) {
        result = result * i;
    }
    return result;
};
exports.loopFactorial = loopFactorial;
// recursive call
var recursiveFactorial = function (n) {
    if (!n)
        return 1;
    return (0, exports.recursiveFactorial)(n - 1) * n;
};
exports.recursiveFactorial = recursiveFactorial;
