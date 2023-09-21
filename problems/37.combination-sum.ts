function combinationSum(candidates: number[], target: number): number[][] {
  const combinations: number[][] = [];
  candidates.sort((a, b) => a - b);

  const search = (
    candidates: number[],
    target: number,
    currSum: number = 0,
    currArr: number[] = []
  ) => {
    if (!candidates.length || currSum + candidates[0] > target) return;

    for (let i = 0; i < candidates.length; i++) {
      if (currSum + candidates[i] === target)
        return combinations.push([...currArr, candidates[i]]);
      if (currSum + candidates[i] > target) return;
      search(candidates.slice(i), target, currSum + candidates[i], [
        ...currArr,
        candidates[i],
      ]);
    }
  };

  search(candidates, target);

  return combinations;
}
