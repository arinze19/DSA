import { caesarCipher } from './CaeserCipher';

it('correctly ciphers a text string', () => {
  expect(caesarCipher('xyz', 2)).toBe('zab');
  expect(caesarCipher('abc', 0)).toBe('abc');
  expect(caesarCipher('abc', 3)).toBe('def');
  expect(caesarCipher('xyz', 5)).toBe('cde');
  expect(
    caesarCipher('kjwmntauvjjnmsagwgawkagfuaugjhawgnawgjhawjgawbfawghesh', 15)
  ).toBe('zylbcipjkyycbhpvlvplzpvujpjvywplvcplvywplyvplquplvwthw');
  expect(caesarCipher('ovmqkwtujqmfkao', 52)).toBe('ovmqkwtujqmfkao');
});
