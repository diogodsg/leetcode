function longestCommonPrefix(strs: string[]): string {
  let longest = "";

  strs = strs.sort((a: string, b: string) => (a > b ? 1 : -1));

  const first = strs[0];

  const last = strs[strs.length - 1];

  for (let i = 0; i < Math.min(first.length, last.length); i++) {
    if (first[i] !== last[i]) return longest;

    longest += first[i];
  }

  return longest;
}
