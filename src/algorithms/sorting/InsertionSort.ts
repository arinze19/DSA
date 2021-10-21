const insert = function (array: number[], rightIndex: number, value: number) {
  for (var j = rightIndex; j >= 0 && array[j] > value; j--) {
    array[j + 1] = array[j];
  }
  array[j + 1] = value;
};

export const insertionSort = function (array: number[]) {
  for (var i = 0; i < array.length - 1; i++) {
    insert(array, i, array[i + 1]);
  }

  return array;
};
