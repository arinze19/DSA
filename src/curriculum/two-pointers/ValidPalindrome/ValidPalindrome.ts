export function validPalindrome(s: string): boolean {
  const str = s.toLowerCase();
  let pt1 = 0;
  let pt2 = s.length - 1;

  while (pt1 < pt2) {
    if (!isValidChar(str[pt1])) {
      pt1 += 1;
    } else if (!isValidChar(str[pt2])) {
      pt2 -= 1;
    } else {
      if (str[pt1] !== str[pt2]) return false;
      pt1 += 1;
      pt2 -= 1;
    }
  }

  return true;
}

const isValidChar = (s: string): boolean => {
  const regex = new RegExp(/[a-z0-9]/);
  return regex.test(s);
};
