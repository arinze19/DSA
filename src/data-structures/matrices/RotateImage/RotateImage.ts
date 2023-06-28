export const rotate = (matrix: number[][]): number[][] => {
  let left = 0;
  let right = matrix[0].length - 1;

  while (left < right) {
    const top = left;
    const bottom = right;

    for (let i = 0; i < right - left; i++) {
      const temp = matrix[top][left + i];

      matrix[top][left + i] = matrix[bottom - i][left];
      matrix[bottom - i][left] = matrix[bottom][right - i];
      matrix[bottom][right - i] = matrix[top + i][right];

      matrix[top + i][right] = temp;
    }

    left += 1;
    right -= 1;
  }

  return matrix;
};
