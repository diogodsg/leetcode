function searchInsert(nums: number[], target: number): number {
  for (let l = 0, r = nums.length - 1; ; ) {
    if (l >= r) {
      if (target > nums[l]) return l + 1;
      return l;
    }

    const m = Math.floor((l + r) / 2);

    if (target === nums[m]) return m;
    if (target > nums[m]) l = m + 1;
    else r = m - 1;
  }
}
