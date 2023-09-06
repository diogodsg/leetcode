function myAtoi(s: string): number {
  const match = s.trim().match(/^(\+[0-9]|\-[0-9]|[0-9])([0-9])*/);

  if (!match) return 0;

  const val = +match[0];

  if (val > 2147483648 - 1) return 2147483648 - 1;

  if (val < -2147483648) return -2147483648;

  return val;
}
