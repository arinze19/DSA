export const caesarCipher = (string: string, key: number): string => {
  let cipher = '';

  for (let i = 0; i < string.length; i++) {
    let characterCode = string.charCodeAt(i) + key;

    while (characterCode > 122) {
      characterCode -= 26;
    }

    cipher += String.fromCharCode(characterCode);
  }

  return cipher;
};
