export function findThreeLargestNumbers(array: number[]): number[] {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      const temp = array[i]; 
      if (array[j] > array[i]) {
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }

  return array.slice(-3)
}
