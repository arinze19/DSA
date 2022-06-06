import { runLengthEncoding } from "./RunLengthEncoding";

test('Properly impliments run length encoding', () => {
    expect(runLengthEncoding("AAAAAAAAAAAAABBCCCCDD")).toBe('9A4A2B4C2D')
    expect(runLengthEncoding("aA")).toBe('1a1A')
    expect(runLengthEncoding("AAAAAAAAAAAAABBCCCCDDDDDDDDDDD")).toBe('9A4A2B4C9D2D')
    expect(runLengthEncoding("[(aaaaaaa,bbbbbbb,ccccc,dddddd)]")).toBe('1[1(7a1,7b1,5c1,6d1)1]')
    expect(runLengthEncoding("        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")).toBe('8 9a9a9a9a9a4a')
    expect(runLengthEncoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")).toBe('9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a1a')
})