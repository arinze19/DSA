export const bubbleSort = (array: number[]) => {
  let isSorted = false;

  do {
    isSorted = true;

    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        isSorted = false;
        const temp = array[i];

        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }
  } while (!isSorted);

  return array;
};
