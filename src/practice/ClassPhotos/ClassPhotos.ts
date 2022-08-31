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
   * loop
   * on each iteration we check whether arr1[i] > arr2[i]
   *    if not return false
   *    if return true
   * determine which array has the highest first integer
   * const arr1 = red[0] > blue[0] ? red : blue
   * const arr2 = red[0] < blue[0] ? red : blue
   */
  const arr1 =
    redShirtHeights[0] > blueShirtHeights[0]
      ? [...redShirtHeights]
      : [...blueShirtHeights];
  const arr2 =
    redShirtHeights[0] < blueShirtHeights[0]
      ? [...redShirtHeights]
      : [...blueShirtHeights];

  for (let i = 0; i < redShirtHeights.length; i++) {
    if (arr1[i] < arr2[i]) return false;
  }

  return true;
};
