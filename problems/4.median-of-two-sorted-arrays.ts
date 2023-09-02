function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const total = nums1.length + nums2.length;
  let newarr: number[] = [];
  let n1index = 0;
  let n2index = 0;

  for (let i = 0; i < total; i++) {
    if (nums1[n1index] === nums1.length) {
      newarr = newarr.concat(nums2.slice(n2index, nums2.length));
      break;
    }

    if (nums2[n2index] === nums2.length) {
      newarr = newarr.concat(nums1.slice(n1index, nums1.length));
      break;
    }

    if (nums1[n1index] < nums2[n2index]) newarr.push(nums1[n1index++]);
    else newarr.push(nums2[n2index++]);
  }

  if (!newarr.length) return 0;

  if (newarr.length % 2 == 0) {
    const n1 = newarr[newarr.length / 2 - 1];
    const n2 = newarr[newarr.length / 2];
    return (n1 + n2) / 2;
  }

  return newarr[Math.floor(newarr.length / 2)];
}
