/**
 * Write a function that takes in a non-empty string and returns its run-length encoding.
 * From Wikipedia, "run-length encoding is a form of lossless data compression in which
 * runs of data are stored as a single data value and count, rather than as the original
 * run." For this problem, a run of data is any sequence of consecutive, identical
 * characters. So the run "AAA" would be run-length encoded as "3A"
 * To make things more complicated, however, the input string can contain all sorts of
 * special characters, including numbers. And since encoded data must be decodable, this
 * means that we can't naively run-length-encode long runs. For example, the run
 * "AAAAAAAAAAAA" (12 A s), can't naively be encoded as "12A" , since this string can
 * be decoded as either "AAAAAAAAAAAA" or "1AA" . Thus, long runs (runs of 10 or
 * more characters) should be encoded in a split fashion; the aforementioned run should
 * be encoded as "9A3A"
 *
 * SAMPLE INPUT
 * string = "AAAAAAAAAAAAABBCCCCDD"
 *
 * SAMPLE OUTPUT
 * 9A4A2B4C2D
 */

interface Item {
  value: string;
  count: number;
}

export const runLengthEncoding = (string: string): string => {
  let pointer = 0;
  const encodingArr: Item[] = [];
  let index = -1;
  let encodingString = '';

  do {
    if (
      string[pointer] === string[pointer - 1] &&
      encodingArr[index].count < 9
    ) {
      encodingArr[index] = {
        ...encodingArr[index],
        count: encodingArr[index].count + 1,
      };
    } else {
      encodingArr.push({ value: string[pointer], count: 1 });
      index += 1;
    }

    pointer++;
  } while (pointer < string.length);

  for (let item of encodingArr) {
    encodingString += item.count + item.value;
  }

  return encodingString;
};
