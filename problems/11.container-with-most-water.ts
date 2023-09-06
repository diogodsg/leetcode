function maxArea(height: number[]): number {
  let max = 0;
  for (let i = 0, j = height.length - 1; i !== j; ) {
    const wall = height[i] > height[j] ? height[j] : height[i];
    const newHeight = (j - i) * wall;
    max = newHeight > max ? newHeight : max;

    if (height[i] > height[j]) j--;
    else i++;
  }

  return max;
}
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
