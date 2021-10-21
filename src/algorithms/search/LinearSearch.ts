type SearchValue = number | string;

export const linearSearch = (array: SearchValue[], target: SearchValue): number => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }

  return -1;
};