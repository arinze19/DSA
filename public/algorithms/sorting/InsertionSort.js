"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertionSort = void 0;
var insert = function (array, rightIndex, value) {
    for (var j = rightIndex; j >= 0 && array[j] > value; j--) {
        array[j + 1] = array[j];
    }
    array[j + 1] = value;
};
var insertionSort = function (array) {
    for (var i = 0; i < array.length - 1; i++) {
        insert(array, i, array[i + 1]);
    }
    return array;
};
exports.insertionSort = insertionSort;
