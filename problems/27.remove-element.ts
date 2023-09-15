function removeElement(nums: number[], val: number): number {
  let tmp = nums.filter((n) => n !== val);
  nums.length = 0;
  nums.push(...tmp);
  return nums.length;
}
