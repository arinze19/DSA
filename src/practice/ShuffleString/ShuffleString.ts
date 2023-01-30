export const shuffleString = (s: string, indices: number[]): string => {
  const cypher = [];
  for (let i = 0; i < s.length; i++) {
    cypher[indices[i]] = s[i];
  }

  return cypher.join('');
};
