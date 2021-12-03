"use strict";
/*
Objective: Given an array of integers, return the product of the two
largest integers in the array
*/
var maxPairwiseProduct = function (array) {
    var idxOne = 0;
    var idxTwo = 0;
    var spliceIdx = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] >= idxOne) {
            idxOne = array[i];
            spliceIdx = i;
        }
    }
    array.splice(spliceIdx, 1);
    for (var j = 0; j < array.length; j++) {
        if (array[j] >= idxTwo) {
            idxTwo = array[j];
        }
    }
    var sum = idxOne * idxTwo;
    return sum;
};
console.log(maxPairwiseProduct([4, 2, 3, 8, 9, 9, 10]));
