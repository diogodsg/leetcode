function lengthOfLongestSubstring(s: string): number {
  if (!s) return 0;

  let longest = 1;
  let numberSet = new Set();
  for (let i = 0; i < s.length; i++) {
    numberSet.add(s[i]);
    for (let j = i + 1; j < s.length; j++) {
      if (numberSet.has(s[j])) {
        longest = longest > numberSet.size ? longest : numberSet.size;
        numberSet.clear();
        break;
      } else {
        numberSet.add(s[j]);
      }
    }
  }

  return longest > numberSet.size ? longest : numberSet.size;
}
