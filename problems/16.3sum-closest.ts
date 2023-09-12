function threeSumClosest(nums: number[], target: number): number {
  nums.sort((a, b) => a - b);

  let isCloser = (old: number, newVal: number, target: number) => {
    let diffold = old > target ? old - target : target - old;
    let diffnew = newVal > target ? newVal - target : target - newVal;
    return diffnew < diffold;
  };

  let closest = nums[0] + nums[1] + nums[2];
  nums.forEach((num, idx) => {
    if (closest === target) return;
    let right = nums.length - 1;
    let left = idx + 1;

    while (left < right) {
      let sum = num + nums[left] + nums[right];

      if (sum === target) {
        closest = sum;
        break;
      }

      if (sum > target) right--;
      else if (sum < target) left++;

      if (isCloser(closest, sum, target)) closest = sum;
    }
  });

  return closest;
}

console.log(threeSumClosest([4, 0, 5, -5, 3, 3, 0, -4, -5], -2));
