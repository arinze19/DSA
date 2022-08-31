import { classPhotos } from './ClassPhotos';

it('correctly determines if a class photo is in sequence', () => {
    expect(classPhotos([6, 9, 2, 4, 5], [5, 8, 1, 3, 4])).toBeTruthy()
    expect(classPhotos([5, 6, 7, 2, 3, 1, 2, 3], [1, 1, 1, 1, 1, 1, 1, 1])).toBeFalsy()
    expect(classPhotos([6], [6])).toBeFalsy()
    expect(classPhotos([5, 4], [4, 5])).toBeFalsy()
    expect(classPhotos([5, 4], [5, 6])).toBeTruthy()
})
