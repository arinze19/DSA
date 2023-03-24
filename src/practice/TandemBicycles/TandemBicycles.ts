export const tandemBicycles = (redShirtsSpeed: number[], blueShirtsSpeed: number[], fastest: boolean): number => {
    let cummulative = 0;
    if(fastest) {
        redShirtsSpeed.sort((a, b) => a - b);
        blueShirtsSpeed.sort((a, b) => b - a);
    } else {
        redShirtsSpeed.sort((a, b) => a - b);
        blueShirtsSpeed.sort((a, b) => a - b);
    }

    for(let i = 0; i < redShirtsSpeed.length; i++) {
        cummulative += Math.max(redShirtsSpeed[i], blueShirtsSpeed[i]);
    }

    return cummulative;
}