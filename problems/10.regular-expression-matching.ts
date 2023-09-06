function isMatch(s: string, p: string): boolean {
  let [i, j] = [0, 0];

  let cache = {};
  function validatePath(i: number, j: number) {
    if (cache[i]?.[j] !== undefined) {
      return cache[i][j];
    }

    if (i >= s.length && j >= p.length) return true;

    if (j >= p.length) return false;

    const match = i < s.length && (s[i] == p[j] || p[j] == ".");

    if (!cache[i]) cache[i] = { [`${j}`]: false };
    if (j + 1 < p.length && p[j + 1] == "*") {
      const valid = validatePath(i, j + 2) || (match && validatePath(i + 1, j));

      cache[i][j] = valid;

      return valid;
    }
    if (match) {
      const valid = validatePath(i + 1, j + 1);
      cache[i][j] = valid;
      return valid;
    }
    return false;
  }

  return validatePath(i, j);
}
