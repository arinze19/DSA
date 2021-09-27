"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const selectionSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                let tempLowest = array[i];
                array[i] = array[j];
                array[j] = tempLowest;
            }
        }
    }
    return array;
};
const numbers = [10, 9, 15, 2, 34, 19, 90, 46, 88];
console.log(selectionSort(numbers));
exports.default = selectionSort;
