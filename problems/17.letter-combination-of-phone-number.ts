let table = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};

function letterCombinations(digits: string): string[] {
  if (!digits.length) return [];

  let arr: string[] = table[digits[0]];

  for (let i = 1; i < digits.length; i++) {
    let tmp: string[] = [];
    for (let digit of table[digits[i]]) {
      for (let item of arr) {
        tmp.push(item + digit);
      }
    }
    arr = tmp;
  }

  return arr;
}
