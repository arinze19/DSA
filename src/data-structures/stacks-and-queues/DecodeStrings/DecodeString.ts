export function decodeString(s: string) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ']') {
      // add to stack
      stack.push(s[i]);
    } else {
      let string = '';
      let number: string | number = ''; // string or number since we want to convert it to a number for looping down the line
      // operations on stack
      // pop all items from the stack until you get to '['
      while (stack.at(-1) !== '[') {
        string = stack.pop() + string;
      }

      // pop out -1 stack ([)
      stack.pop();

      // go through stack until you get the full numbers
      while (!isNaN(Number(stack.at(-1)))) {
        number = stack.pop() + number;
      }

      // convert number into a number
      number = Number(number);

      // generate strings from number
      while (number > 0) {
        stack.push(string);
        number -= 1;
      }
    }
  }

  return stack.join('');
}

console.log(decodeString("3[a]2[bc]"));
