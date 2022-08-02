/**
 * Write a function that takes in an array of at least three integers and WITHOUT SORTING the input array,
 * returns a orted array of the three largest integers in the input array. 
 * 
 * The function should return duplicate integers if necessary
 * 
 * SAMPLE INPUT 
 * [10, 5, 9, 10, 12]
 * 
 * SAMPLE OUTPUT
 * [ 10, 10, 12 ]
 * 
 * RUNTIME 
 * O(n^2) -- suboptimal
 */


export function findThreeLargestNumbers(array: number[]): number[] {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      let temp = array[i]; 
      if (array[j] > array[i]) {
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }

  return array.slice(-3)
}
