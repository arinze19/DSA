"use strict";
const firstCharacter = function (str) {
    return str.slice(0, 1);
};
const middleCharacters = function (str) {
    return str.slice(1, -1);
};
const lastCharacter = function (str) {
    return str.slice(-1);
};
const isPalindrome = function (str) {
    // base case #1
    if (str.length <= 1) {
        return true;
    }
    // base case #2
    if (firstCharacter(str) !== lastCharacter(str)) {
        return false;
    }
    // recursive case
    return isPalindrome(middleCharacters(str));
};
