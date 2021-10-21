"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.binarySearch = void 0;
var binarySearch = function (list, target) {
    var first = 0;
    var last = list.length - 1;
    do {
        var midPoint = Math.floor((first + last) / 2);
        if (list[midPoint] == target)
            return midPoint;
        if (list[midPoint] < target) {
            first = midPoint + 1;
        }
        else {
            last = midPoint - 1;
        }
    } while (first <= last);
    return -1;
};
exports.binarySearch = binarySearch;
