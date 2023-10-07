function maxSubArray(nums: number[]): number {
  let max = nums[0];
  let curSum = 0;

  for (let n of nums) {
    if (curSum < 0) curSum = 0;
    curSum += n;
    max = curSum > max ? curSum : max;
  }

  return max;
}
