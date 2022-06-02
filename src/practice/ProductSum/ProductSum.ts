/**
 * Write a function that takes in a "special array and returns its product sum.
 * A "special" array is a non-empty array that contains either integers or other "special"
 * arrays. The product sum of a "special" array is the sum of its elements, where "special"
 * arrays inside it are summed themselves and then multiplied by their level of depth.
 * The depth of a "special" array is how far nested it is. For instance, the depth of [] is
 * 1; the depth of the inner array in [[]] is 2; the depth of the innermost array in
 * [[[]]] is 3
 * Therefore, the product sum of [x, y] is × + y; the product sum of
 * [x, [y, z]] is × + 2 * (y + z) ; the product sum of [x, [y, [z]]] is x + 2 * (y + 3z)
 * 
 * 
 * SAMPLE INPUT 
 * [5, 2, [7, -1], 3, [6, [-13, 8], 4]]
 * 
 * SAMPLE OUTPUT 
 * 12
 * 
 * TIME AND SPACE COMPLEXITY
 * The optimal time and space complexity for this program is O(n) - time | O(d) - space where d 
 * represents the depth of each item array
 *
 */

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
