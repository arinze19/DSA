export const selectionSort = (array: number[]): number[] => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        const tempLowest = array[i];
        array[i] = array[j];
        array[j] = tempLowest;
      }
    }
  }

  return array;
};
