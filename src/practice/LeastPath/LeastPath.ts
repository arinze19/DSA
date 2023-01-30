export const leastPath = (strArr: string[]) => {
  let i = 1;
  let j = parseInt(strArr[0], 10);
  let leastPath = '';
  while (i < j) {
    const path = strArr.indexOf(
      // path A-B as a string.            // where to start search from, converting to integer
      strArr[i] + '-' + strArr[j],
      parseInt(strArr[0], 10)
    );

    if (path === -1) {
      j = j - 1;
    } else {
      leastPath = leastPath
        ? leastPath + strArr[path].slice(-2)
        : leastPath + strArr[path];
      i = j;
      j = parseInt(strArr[0], 10);
    }
  }

  return leastPath ? leastPath : -1;
};
