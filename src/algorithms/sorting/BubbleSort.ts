export function bubbleSort(n: number[]): number[] {
  for (let i = 0; i < n.length; i++) {
    for (let j = 0; j < n.length - 1; j++) {
      if (n[j] > n[j + 1]) {
        const temp = n[j];
        n[j] = n[j + 1];
        n[j + 1] = temp;
      }
    }
  }

  return n;
}
