import { twoNumberSum } from './twoNumberSum';

test('Determine If array contains elements that add up to target sum', () => {
    expect(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10)).toEqual([11, -1])
    expect(twoNumberSum([4, 6], 10)).toEqual([4, 6])
    expect(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 15)).toEqual([])
    expect(twoNumberSum([14], 10)).toEqual([])
    expect(twoNumberSum([15], 15)).toEqual([])
    expect(twoNumberSum([4, 6, 1, -3], 3)).toEqual([6, -3])
})