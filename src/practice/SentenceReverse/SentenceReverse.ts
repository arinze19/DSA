const arr = ['o', 'b', 'i', '', 'i', 's', '', 'b', 'o', 'y'];
const result = [];

for (let i = 0; i < arr.length; ) {
  let pointer = i;
  let word = '';

  while (pointer < arr.length && arr[pointer] !== '') {
    console.log(arr[pointer]);

    word += arr[pointer];
    pointer += 1;
  }

  if (arr[pointer] === '') {
    word += ' ';
  }
  result.unshift(...word.split(''));
  i = pointer + 1;
}

console.log(result);
