function canJump(nums: number[]): boolean {
  if (nums.length === 1) true;
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] === 0) {
      let canContinue = false;
      for (let j = i - 1; j >= 0; j--) {
        if (nums[j] > i - j) {
          canContinue = true;
          i = j;
          break;
        }
      }

      if (!canContinue) return false;
    }
  }
  return true;
}
