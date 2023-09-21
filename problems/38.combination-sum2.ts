function combinationSum2(candidates: number[], target: number): number[][] {
  const combinations: number[][] = [];
  candidates.sort((a, b) => a - b);

  const search = (
    candidates: number[],
    target: number,
    currSum: number = 0,
    currArr: number[] = []
  ) => {
    if (!candidates.length || currSum + candidates[0] > target) return;

    let last: number | null = null;
    for (let i = 0; i < candidates.length; i++) {
      if (candidates[i] === last) continue;

      if (currSum + candidates[i] === target)
        return combinations.push([...currArr, candidates[i]]);
      if (currSum + candidates[i + 1] > target) return;
      search(candidates.slice(i + 1), target, currSum + candidates[i], [
        ...currArr,
        candidates[i],
      ]);
      last = candidates[i];
    }
  };

  search(candidates, target);

  return combinations;
}

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
