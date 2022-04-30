import { isPalindrome } from '../src/algorithms/recursions/Palindrome';
import { loopFactorial, recursiveFactorial } from '../src/algorithms/recursions/FactorialFunction';
import { binarySearch } from '../src/algorithms/search/BinarySearch';
import { linearSearch } from '../src/algorithms/search/LinearSearch';
import { mergeSort } from '../src/algorithms/sorting/MergeSort';
import { insertionSort } from '../src/algorithms/sorting/InsertionSort';
import { selectionSort } from '../src/algorithms/sorting/SelectionSort';

test('Determines if a string is a palindrome', () => {
  expect(isPalindrome('motor')).toBe(false);
  expect(isPalindrome('rotor')).toBe(true);
});

test('Determines the factorial of a number', () => {
  expect(loopFactorial(5)).toBe(120);
  expect(recursiveFactorial(5)).toBe(120);
});

test('Search through an array and return the index of a given value', () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  expect(binarySearch(array, 7)).toBe(6);
  expect(linearSearch(array, 7)).toBe(6);
});

test('Sort an array of numbers', () => {
  const numbers = [10, 9, 15, 2, 34, 19, 90, 46, 88];
  expect(insertionSort(numbers)).toStrictEqual([2, 9, 10, 15, 19, 34, 46, 88, 90]);
  expect(selectionSort(numbers)).toStrictEqual([2, 9, 10, 15, 19, 34, 46, 88, 90]);
  expect(mergeSort(numbers)).toStrictEqual([2, 9, 10, 15, 19, 34, 46, 88, 90]);
});
