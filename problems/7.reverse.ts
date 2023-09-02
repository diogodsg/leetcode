function reverse(x: number): number {
  const negative = x < 0;

  if (negative) x = -x;

  let reverse = String(x).split("").reverse().join("");

  if (negative) reverse = "-" + reverse;

  if (+reverse > 2147483648 - 1 || +reverse < -2147483648) return 0;

  return +reverse;
}
