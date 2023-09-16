const merge = (arr: number[], l: number, m: number, r: number) => {
  const lSize = m - l + 1;
  const rSize = r - m;

  const lCopy: number[] = new Array(lSize);
  const rCopy: number[] = new Array(rSize);

  for (let i = 0; i < lSize; i++) lCopy[i] = arr[l + i];
  for (let i = 0; i < rSize; i++) rCopy[i] = arr[m + 1 + i];
  let lIndex = 0;
  let rIndex = 0;
  let arrIndex = l;

  while (lIndex < lSize && rIndex < rSize) {
    if (lCopy[lIndex] < rCopy[rIndex]) arr[arrIndex++] = lCopy[lIndex++];
    else arr[arrIndex++] = rCopy[rIndex++];
  }

  while (lIndex < lSize) arr[arrIndex++] = lCopy[lIndex++];
  while (rIndex < rSize) arr[arrIndex++] = rCopy[rIndex++];
};

const mergeSort = (arr: number[], l: number, r: number) => {
  if (l >= r) return;

  const m = Math.floor((r + l) / 2);

  mergeSort(arr, l, m);
  mergeSort(arr, m + 1, r);
  merge(arr, l, m, r);
};

function nextPermutation(nums: number[]): void {
  for (let i = nums.length - 1; i >= 1; i--) {
    if (nums[i] > nums[i - 1]) {
      let indexSwap = i;
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] > nums[i - 1] && nums[j] < nums[indexSwap]) indexSwap = j;
      }
      let tmp = nums[i - 1];
      nums[i - 1] = nums[indexSwap];
      nums[indexSwap] = tmp;
      return mergeSort(nums, i, nums.length - 1);
    }
  }
  nums.sort((a, b) => a - b);
}
