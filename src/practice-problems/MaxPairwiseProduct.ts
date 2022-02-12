/*
Objective: Given an array of integers, return the product of the two 
largest integers in the array

Time Complexity - O(n)
Space Complexity - 0(1)
*/

const maxPairwiseProduct = (array: number[]): number | void => {
  if (array.length < 3) return 

  let idxOne = 0;
  let idxTwo = 0;
  let spliceIdx = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] >= idxOne) {
      idxOne = array[i];
      spliceIdx = i;
    }
  }

  array.splice(spliceIdx, 1);

  for (let j = 0; j < array.length; j++) {
    if (array[j] >= idxTwo) {
      idxTwo = array[j];
    }
  }

  let sum = idxOne * idxTwo;
  return sum;
};

maxPairwiseProduct([4, 2, 3, 8, 9, 9, 10]);
