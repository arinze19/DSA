"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeSort = void 0;
var combine = function (a, b) {
    var i = 0;
    var j = 0;
    var k = 0;
    var combinedArray = __spreadArray(__spreadArray([], a, true), b, true);
    while (i < a.length && j < b.length) {
        if (a[i] <= b[j]) {
            combinedArray[k] = a[i];
            i++;
        }
        else {
            combinedArray[k] = b[j];
            j++;
        }
        k++;
    }
    while (i < a.length) {
        combinedArray[k] = a[i];
        i++;
        k++;
    }
    while (j < b.length) {
        combinedArray[k] = b[j];
        j++;
        k++;
    }
    return combinedArray;
};
var mergeSort = function (array) {
    if (array.length === 1)
        return array;
    var midPoint = Math.floor(array.length / 2);
    var leftHalf = array.slice(0, midPoint);
    var rightHalf = array.slice(midPoint);
    return combine((0, exports.mergeSort)(leftHalf), (0, exports.mergeSort)(rightHalf));
};
exports.mergeSort = mergeSort;
var array = [17, 25, 89, 90, 73, 99, 56, 70];
