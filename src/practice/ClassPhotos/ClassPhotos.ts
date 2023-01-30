export const classPhotos = (
  redShirtHeights: number[],
  blueShirtHeights: number[]
) => {
  // Write your code here.
  redShirtHeights.sort((a, b) => a - b);
  blueShirtHeights.sort((a, b) => a - b);

  const backwardArray =
    Math.max(
      redShirtHeights[redShirtHeights.length - 1],
      blueShirtHeights[blueShirtHeights.length - 1]
    ) === redShirtHeights[redShirtHeights.length - 1]
      ? redShirtHeights
      : blueShirtHeights;
  const forwardArray =
    Math.min(
      redShirtHeights[redShirtHeights.length - 1],
      blueShirtHeights[blueShirtHeights.length - 1]
    ) === redShirtHeights[redShirtHeights.length - 1]
      ? redShirtHeights
      : blueShirtHeights;

  for (let i = 0; i < backwardArray.length; i++) {
    if (backwardArray[i] <= forwardArray[i]) return false;
  }

  return true;
};
