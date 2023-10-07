function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0]);

  let merged: number[][] = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const [start, end] = intervals[i];
    let last = merged[merged.length - 1];
    const lastEnd = last[1];
    if (start <= lastEnd)
      merged[merged.length - 1] = [last[0], Math.max(last[1], end)];
    else merged.push(intervals[i]);
  }

  return merged;
}
