function longestValidParentheses(s: string): number {
  let start = 0;
  let end = s.length - 1;
  if (s[start] == ")") start++;
  if (s[end] == "(") end--;

  let left = 0;
  let right = 0;
  let max = 0;
  for (let i = start; i <= end; i++) {
    if (s[i] === "(") left++;
    else right++;

    if (left == right) max = Math.max(max, left * 2);

    if (right > left) {
      left = 0;
      right = 0;
    }
  }
  left = 0;
  right = 0;
  for (let i = end; i >= start; i--) {
    if (s[i] === "(") left++;
    else right++;

    if (left == right) max = Math.max(max, left * 2);

    if (left > right) {
      left = 0;
      right = 0;
    }
  }
  return max;
}
