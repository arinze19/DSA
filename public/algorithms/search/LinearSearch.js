"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.linearSearch = void 0;
var linearSearch = function (array, target) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i;
        }
    }
    return -1;
};
exports.linearSearch = linearSearch;
