import { selectionSort } from "./SelectionSort";

test('determine if array is correctly sorted', () => {
    expect(selectionSort([3,6,2,8,9])).toEqual([2,3,6,8,9])
    expect(selectionSort([10,11,2,13,15])).toEqual([2,10,11,13,15])
    expect(selectionSort([1,100,200,300])).toEqual([1,100,200,300])
})