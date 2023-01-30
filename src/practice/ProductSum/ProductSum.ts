export const productSum = (arr: any, depth = 1): number => {
  if (arr.length === 0) {
    return 0;
  } else if (arr.length <= 1 && !Array.isArray(arr[0])) {
    return arr[0];
  } else if (Array.isArray(arr[0])) {
    return (
      (depth + 1) * productSum(arr[0], depth + 1) +
      productSum(arr.slice(1), depth)
    );
  } else {
    return arr[0] + productSum(arr.slice(1), depth);
  }
};
