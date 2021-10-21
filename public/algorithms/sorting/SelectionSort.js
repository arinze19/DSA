"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectionSort = void 0;
var selectionSort = function (array) {
    for (var i = 0; i < array.length; i++) {
        for (var j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                var tempLowest = array[i];
                array[i] = array[j];
                array[j] = tempLowest;
            }
        }
    }
    return array;
};
exports.selectionSort = selectionSort;
