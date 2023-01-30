/**
 * Impliment Insertion Sort
 *
 * RUNTIME AND SPACE COMPLEXITY
 * O(n) time | O(1) space
 */

export const insertionSort = (array: number[]) => {
  for (let i = 1; i < array.length; i++) {
    const sub = array.slice(0, i);
    for (let j = 0; j < sub.length; j++) {
      if (array[i] < sub[j]) {
        const temp = array[i];

        array[i] = sub[j];
        array[j] = temp;
      }
    }
  }

  return array;
};
