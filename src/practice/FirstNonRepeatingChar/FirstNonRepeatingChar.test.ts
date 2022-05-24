import { firstNonRepeatingCharacter } from "./FirstNonRepeatingChar";

test('If string contains repeating character', () => {
    expect(firstNonRepeatingCharacter('abcdcaf')).toBe(1)
    expect(firstNonRepeatingCharacter('faadabcbbebdf')).toBe(6)
    expect(firstNonRepeatingCharacter('a')).toBe(0)
    expect(firstNonRepeatingCharacter('ab')).toBe(0)
    expect(firstNonRepeatingCharacter('aaaaaaaaaaaaaaaaaaaabbbbbbbbbbcccccccccccdddddddddddeeeeeeeeffghgh')).toBe(-1)
    expect(firstNonRepeatingCharacter('aabbccddeeff')).toBe(-1)
})