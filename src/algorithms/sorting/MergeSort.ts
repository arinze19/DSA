const combine = (a: number[], b: number[]): number[] => {
  let i = 0;
  let j = 0;
  let k = 0;
  const combinedArray = [...a, ...b];

  while (i < a.length && j < b.length) {
    if (a[i] <= b[j]) {
      combinedArray[k] = a[i];
      i++;
    } else {
      combinedArray[k] = b[j];
      j++;
    }

    k++;
  }

  while (i < a.length) {
    combinedArray[k] = a[i];
    i++;
    k++;
  }

  while (j < b.length) {
    combinedArray[k] = b[j];
    j++;
    k++;
  }
  return combinedArray;
};

export const mergeSort = (array: number[]): number[] => {
  if (array.length < 1) return array;

  const midPoint = Math.floor(array.length / 2);
  let leftHalf = array.slice(0, midPoint);
  let rightHalf = array.slice(midPoint);

  return combine(mergeSort(leftHalf), mergeSort(rightHalf));
};

const array = [17, 25, 89, 90, 73, 99, 56, 70];
