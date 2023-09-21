function firstMissingPositive(nums: number[]): number {
  const table = new Set(nums);
  const max = nums.length + 1;

  for (let i = 1; i < max; i++) {
    if (!table.has(i)) return i;
  }
  return max;
}
