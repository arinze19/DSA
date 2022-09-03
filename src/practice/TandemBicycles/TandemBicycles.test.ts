import { tandemBicycles } from './TandemBicycles';

it('correctly determines the max or min pairing speed of tandem bicyles', () => {
    expect(tandemBicycles([3, 6, 7, 2, 1], [5, 5, 3, 9, 2], true)).toBe(32);
    expect(tandemBicycles([3, 6, 7, 2, 1], [5, 5, 3, 9, 2], false)).toBe(25);
    expect(tandemBicycles([3, 3, 4, 6, 1, 2], [1, 2, 1, 9, 12, 3], false)).toBe(30);
    expect(tandemBicycles([3, 3, 4, 6, 1, 2, 5, 6, 34, 256, 123, 32], [1, 2, 1, 9, 12, 3, 1, 54, 21, 231, 32, 1], true)).toBe(816);
    expect(tandemBicycles([1, 1, 1, 1, 3, 3, 3, 3, 5, 7], [1, 1, 1, 1, 2, 2, 2, 2, 9, 11], true)).toBe(48);
})
