/**
 * It's photo day at the local school, and you're the photographer assigned to take class photos. The
 * class that you'll be photographing has an even number of students, and all these students are
 * wearing red or blue shirts. In fact, exactly half of the class is wearing red shirts, and the other half is
 * wearing blue shirts. You're responsible for arranging the students in two rows before taking the
 * photo. Each row should contain the same number of the students and should adhere to the
 * following guidelines:

• All students wearing red shirts must be in the same row.
• All students wearing blue shirts must be in the same row.

 * Each student in the back row must be strictly taller than the student directly in front of them
 * in the front row.
 * You're given two input arrays: one containing the heights of all the students with red shirts and
 * another one containing the heights of all the students with blue shirts. These arrays will always have
 * the same length, and each height will be a positive integer. Write a function that returns whether or
 * not a class photo that follows the stated guidelines can be taken.

 * Note: you can assume that each class has at least 2 students,
 */

export const classPhotos = (
  redShirtHeights: number[],
  blueShirtHeights: number[]
) => {
  // Write your code here.
  /**
   * Sort the array
   * find out which has the tallest value
   * assign the back row to the array with the highest value
   * comapre
   */
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
