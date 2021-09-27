"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const linearSearch = (array, target) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i;
        }
    }
    return -1;
};
exports.default = linearSearch;
