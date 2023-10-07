function groupAnagrams(strs: string[]): string[][] {
  const groups: Record<string, string[]> = {};

  for (let str of strs) {
    let pattern = [...str].sort().join("");
    if (groups[pattern]) groups[pattern].push(str);
    else groups[pattern] = [str];
  }

  return Object.values(groups);
}
