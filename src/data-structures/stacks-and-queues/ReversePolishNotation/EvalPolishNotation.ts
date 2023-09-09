// ======== Helpers
const match = {
  '+': (a: number, b: number) => b + a,
  '-': (a: number, b: number) => b - a,
  '/': (a: number, b: number) => parseInt(String(b / a)),
  '*': (a: number, b: number) => b * a,
};
// ======= Helpers

export function evalPolishNotation(tokens: string[]): number {
  // no division by zero
  // division between two integers always truncates towards zero
  const stack = [];

  // loop through tokens
  for (let i = 0; i < tokens.length; i++) {
    // if tokens[i] is an operator, pick items from stack and process
    if (tokens[i] in match) {
      // pass ref to the function
      const exec = match[tokens[i] as keyof typeof match];

      // pop out the last two values from the stack
      const a: number = stack.pop()!;
      const b: number = stack.pop()!;
      const result = exec(a, b);

      // get the evaluation of both values
      stack.push(result);
    } else {
      stack.push(Number(tokens[i]));
    }
  }

  return stack.pop()!;
}
