import { findThreeLargestNumbers } from './ThreeLargestNumber';

test('determine if three largest numbers are returned', () => {
    expect(findThreeLargestNumbers([10, 5, 9, 10, 12])).toEqual([ 10, 10, 12 ])
    expect(findThreeLargestNumbers([7, 7, 7, 7, 7, 7, 8, 7, 7, 7, 7])).toEqual([7, 7, 8])
    expect(findThreeLargestNumbers([-1, -2, -3, -7, -17, -27, -18, -541, -8, -7, 7])).toEqual([-2, -1, 7])
})