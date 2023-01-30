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

  for (const item of encodingArr) {
    encodingString += item.count + item.value;
  }

  return encodingString;
};
