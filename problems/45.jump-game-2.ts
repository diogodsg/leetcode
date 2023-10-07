function jump(nums: number[]): number {
  let index = 0;
  let jumps = 0;
  while (index < nums.length - 1) {
    let max = nums[index + 1];
    let jmpIndex = index + 1;
    for (let i = index + 2, step = 1; i <= index + nums[index]; i++, step++) {
      if (i === nums.length - 1) return jumps + 1;
      if (nums[i] + step >= max) {
        max = nums[i] + step;
        jmpIndex = i;
      }
    }
    index = jmpIndex;
    jumps++;
  }

  return jumps;
}
