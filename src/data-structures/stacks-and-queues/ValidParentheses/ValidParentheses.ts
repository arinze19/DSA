export function validParentheses(s: string): boolean {
  const tokens: Record<string, string> = { '{': '}', '[': ']', '(': ')' };
  const stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    const head = stack[0]; // get the head of the stack
    if (s[i] in tokens) {
      // if it's not a closing bracket, add it to the stack

      stack.unshift(s[i]);
    } else if (s[i] !== tokens[head]) {
      // if it's a closing bracket and it doesn't match what is popped from the stack, return false

      return false;
    } else {
      // if it's the closing bracket of what's on the stack, pop it out
      stack.shift();
    }
  }

  return stack.length === 0;
}
