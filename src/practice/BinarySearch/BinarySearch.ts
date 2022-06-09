/**
 * Implement Binary Search
 */




export const binarySearch = (array: number[], target: number) => {
  let first = 0;
  let last = array.length - 1;

  do {
    const midPoint = Math.floor((first + last) / 2);

    if (array[midPoint] == target) return midPoint;

    if (array[midPoint] < target) {
      first = midPoint + 1;
    } else {
      last = midPoint - 1;
    }
  } while (first <= last);

  return -1;
};
