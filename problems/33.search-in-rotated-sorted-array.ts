function search(nums: number[], target: number): number {
  let l = 0;
  let r = nums.length;

  while (l < r) {
    const m = Math.floor((l + r) / 2);
    if (nums[m] === target) return m;
    if (nums[l] === target) return l;
    if (nums[r] === target) return r;

    if (nums[m] > nums[l]) {
      if (target > nums[l] && target < nums[m]) r = m;
      else l = m;
      continue;
    }
    if (target > nums[m] && target < nums[l]) l = m;
    else r = m;
  }

  return -1;
}
