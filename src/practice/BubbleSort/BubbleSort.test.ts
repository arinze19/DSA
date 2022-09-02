import { bubbleSort } from './BubbleSort';

it('correctly sorts an array using bubble sort', () => {
    expect(bubbleSort([8, 5, 2, 9, 5, 6, 3])).toEqual([2, 3, 5, 5, 6, 8, 9])
    expect(bubbleSort([1,5,3,4])).toEqual([1,3,4,5])
})