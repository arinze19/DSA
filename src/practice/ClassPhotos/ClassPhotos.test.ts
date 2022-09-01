import { classPhotos } from './ClassPhotos';

it('correctly determines if a class photo is in sequence', () => {
    expect(classPhotos([6, 9, 2, 4, 5], [5, 8, 1, 3, 4])).toBeTruthy()
    expect(classPhotos([6], [6])).toBeFalsy()
    expect(classPhotos([5, 4], [4, 5])).toBeFalsy()
    expect(classPhotos([5, 4], [5, 6])).toBeTruthy()
    expect(classPhotos([6], [6])).toBeFalsy()
    expect(classPhotos([126], [125])).toBeTruthy()
})
