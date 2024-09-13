const happyNumber = (num: number): boolean => {
    const cache = {};

    return happyNumberHelper(num, cache);
}

const happyNumberHelper = (num: number, cache: Record<number, unknown>): boolean => {
    if (num === 1) return true;

    if (cache[num]) return false;

    cache[num] = num;

    const squared = (num)
                    .toString()
                    .split('')
                    .map(val => Number(val)**2)
                    .reduce((acc, curr) => acc + curr);

    return happyNumberHelper(squared, cache);
}
