function findSubstring(s: string, words: string[]): number[] {
  let wordLength = words[0].length;
  let index: number[] = [];

  if (s.length < wordLength * words.length) return [];

  let table: Record<string, number> = {};

  words.forEach((word) => {
    if (!table[word]) table[word] = 1;
    else table[word] += 1;
  });

  for (let i = 0; i <= s.length - wordLength * words.length; i++) {
    let substring = s.slice(i, i + wordLength * words.length);
    if (isConcatenation(substring, table, wordLength)) index.push(i);
  }
  return index;
}

function isConcatenation(
  s: string,
  table: Record<string, number>,
  wordLength: number
) {
  let substringTable: Record<string, number> = {};

  for (let i = 0; i < s.length; i += wordLength) {
    const slice = s.slice(i, i + wordLength);
    if (!substringTable[slice]) substringTable[slice] = 1;
    else substringTable[slice] += 1;
  }
  return Object.keys(table).every((key) => table[key] === substringTable[key]);
}
