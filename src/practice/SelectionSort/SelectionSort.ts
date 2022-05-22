/**
 * Write a function that takes in an array of integers and returns a
 * sorted version of that array. use the selection sort algorithm to sort the array
 * SAMPLE INPUT
 * array  = [3, 5, -4, 8, 11, 1, -1, 6]
 *
 * SAMPLE OUTPUT
 * [-4, -1, 1, 3, 5, 6, 8, 11]
 *
 * TIME AND SPACE COMPLEXITY
 * The optimal time and space complexity for this program is O(n^2) - time | O(1) - space
 */

 export const selectionSort = (array: number[]):number[] => {
    // Write your code here.
      for(let i = 0; i < array.length; i++) {
          for(let j = i + 1; j < array.length; j++) {
              if(array[j] < array[i]) {
                  let temp = array[i];
                  array[i] = array[j]
                  array[j] = temp
              }
          }
      }
      
      return array
}