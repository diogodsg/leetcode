function permute(nums: number[]): number[][] {
  let results: number[][] = [];

  const getPermutation = (arr: number[], remaining: number[]) => {
    if (remaining.length === 1) return results.push([...arr, remaining[0]]);

    for (let i = 0; i < remaining.length; i++) {
      getPermutation(
        [...arr, remaining[i]],
        remaining.filter((_, idx) => idx !== i)
      );
    }
  };
  getPermutation([], nums);
  return results;
}

