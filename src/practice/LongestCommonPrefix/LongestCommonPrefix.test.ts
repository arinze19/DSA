import { longestCommonPrefix } from './LongestCommonPrefix';

it('correctly finds the most common prefix in an array of strings', () => {
    expect(longestCommonPrefix(["flower","flow","flight"])).toBe('fl')
    expect(longestCommonPrefix(["dog","racecar","car"])).toBe('')
})