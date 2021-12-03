function quickSort(array) {
  const lastIndex = array.length - 1;
  let i = -1;
  let j = 0;

  do {
    if (array[j] < array[lastIndex]) {
      i++;
      const temp = array[j];
      array[j] = array[i];
      array[i] = temp;
    }

    j++;
  } while (j < array.length);

  for (let k = lastIndex; k > i + 1; k--) {
    const temp = array[k];
    array[k] = array[k - 1];
    array[k - 1] = temp;
  }
  
  return array;
}

let testArray = [9, 2, 4, 9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
console.log(quickSort(testArray));
