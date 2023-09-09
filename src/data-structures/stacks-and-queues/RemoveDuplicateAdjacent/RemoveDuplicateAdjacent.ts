export function removeDuplicateAdjacent(s: string, k: number): string {
  const stack: [string, number][] = [];

  for (let i = 0; i < s.length; i++) {
    if (stack.length === 0 || stack[stack.length - 1][0] !== s[i]) {
      stack.push([s[i], 1]);
    } else {
      stack[stack.length - 1][1] += 1;
      if (stack[stack.length - 1][1] === k) {
        stack.pop();
      }
    }
  }

  return stack.reduce((acc, [char, count]) => acc + char.repeat(count), '');
}
