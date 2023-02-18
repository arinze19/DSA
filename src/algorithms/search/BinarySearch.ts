type SearchValue = number | string;

export const binarySearch = (
  list: SearchValue[],
  target: SearchValue
): number | null => {
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

const binarySearch2 = (
  list: SearchValue[],
  target: SearchValue
): number | null => {
  while (list.length > 0) {
    const midPoint = Math.floor((0 + list.length - 1) / 2);

    if (list[midPoint] === target) return midPoint;

    if (list[midPoint] < target) {
      list.splice(midPoint);
    } else {
      list.splice(0, midPoint);
    }
  }

  return -1;
};

const binarySearch3 = (
  nums: SearchValue[],
  target: SearchValue
): number | null => {
  if (nums.length == 0) return null;

  const midpoint = Math.floor(nums.length / 2);

  if (nums[midpoint] === target) return midpoint;

  if (nums[midpoint] > target) {
    return binarySearch3(nums.slice(0, midpoint), target);
  } else {
    return binarySearch3(nums.slice(midpoint), target);
  }
};
