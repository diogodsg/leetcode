function fourSum(nums: number[], target: number): number[][] {
  if (nums.length < 4) return [];

  const quadruplets: number[][] = [];

  nums.sort((a: number, b: number) => a - b);

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let left = j + 1;
      let right = nums.length - 1;

      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];

        if (sum === target) {
          const existent = quadruplets.find(
            ([a, b, c, d]) =>
              a === nums[i] &&
              b === nums[j] &&
              nums[left] === c &&
              nums[right] === d
          );
          if (!existent)
            quadruplets.push([nums[i], nums[j], nums[left], nums[right]]);
          left++;
          right--;
        } else if (sum < target) left++;
        else right--;
      }
    }
  }

  return quadruplets;
}
