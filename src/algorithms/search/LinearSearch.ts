type SearchValue = number | string;

const linearSearch = (array: SearchValue[], target: SearchValue): number => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }

  return -1;
};

export default linearSearch;
