function convert(s: string, numRows: number): string {
  const jumpElements = numRows > 1 ? 2 * numRows - 2 : 1;
  let newWord = "";

  for (let row = 0; row < numRows; row++) {
    for (let index = row; index < s.length; index += jumpElements) {
      newWord += s[index];

      if (row !== 0 && row !== numRows - 1) {
        const next = index + jumpElements - 2 * row;

        if (s[next]) newWord += s[next];
      }
    }
  }
  return newWord;
}

console.log(convert("PAYPALISHIRING", 4));
