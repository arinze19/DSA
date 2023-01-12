type SearchValue = number | string;

export const binarySearch = (list: SearchValue[], target: SearchValue): number => {
  let first = 0;
  let last = list.length - 1;

  do {
    const midPoint = Math.floor((first + last) / 2);

    if (list[midPoint] == target) return midPoint;

    if (list[midPoint] < target) {
      first = midPoint + 1;
    } else {
      last = midPoint - 1;
    }
  } while (first <= last);

  return -1;
};

const binarySearch2 = (list: SearchValue[], target: SearchValue): number => {
  while(list.length > 0) {
    const midPoint = Math.floor((0 + list.length - 1) / 2);

    if(list[midPoint] === target) return midPoint;

    if(list[midPoint] < target) {
      list.splice(midPoint)
    } else {
      list.splice(0, midPoint)
    }
  }

  return -1
}
