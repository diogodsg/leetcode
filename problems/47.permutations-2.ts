function permuteUnique(nums: number[]): number[][] {
  let results: number[][] = [];
  nums.sort((a, b) => a - b);

  const count = {};
  nums.forEach((n) => {
    if (count[n] === undefined) count[n] = 1;
    else count[n] += 1;
  });

  let keys = Object.keys(count);
  const getPermute = (count: object, perm: number[]) => {
    if (perm.length === nums.length) return results.push(perm);
    for (let key of keys) {
      if (count[key] === 0) continue;
      getPermute({ ...count, [`${key}`]: count[key] - 1 }, [...perm, +key]);
    }
  };

  getPermute(count, []);

  return results;
}
