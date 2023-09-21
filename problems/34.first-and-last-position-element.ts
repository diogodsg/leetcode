function searchRange(nums: number[], target: number): number[] {
  if (!nums.length) return [-1, -1];
  let first = -1;
  let last = -1;

  if (nums[0] !== target) {
    for (let l = 0, r = nums.length - 1; l <= r; ) {
      let m = Math.floor((l + r) / 2);
      if (target === nums[m] && nums[m - 1] < target) {
        first = m;
        break;
      }

      if (l == r) break;

      if (target <= nums[m]) r = m - 1;
      else l = m + 1;
    }
  } else {
    first = 0;
  }
  if (nums[nums.length - 1] !== target) {
    for (let l = 0, r = nums.length - 1; l <= r; ) {
      let m = Math.floor((l + r) / 2);

      if (target === nums[m] && nums[m + 1] > target) {
        last = m;
        break;
      }

      if (l == r) break;

      if (target < nums[m]) r = m - 1;
      else l = m + 1;
    }
  } else {
    last = nums.length - 1;
  }
  return [first, last];
}
