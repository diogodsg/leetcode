function removeDuplicates(nums: number[]) {
  let temp = [...new Set(nums)];
  nums.length = 0;
  nums.push(...temp);
  return nums.length;
}
