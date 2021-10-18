const firstCharacter = function (str: string): string {
  return str.slice(0, 1);
};

const middleCharacters = function (str: string): string {
  return str.slice(1, -1);
};

const lastCharacter = function (str: string): string {
  return str.slice(-1);
};

export const isPalindrome = function (str: string): boolean {
  // base case #1
  if (str.length <= 1) {
    return true;
  }
  // base case #2
  if (firstCharacter(str) !== lastCharacter(str)) {
    return false;
  }
  // recursive case
  return isPalindrome(middleCharacters(str));
};