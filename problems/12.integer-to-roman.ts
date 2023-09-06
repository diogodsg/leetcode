function intToRoman(num: number): string {
  const list = ["I", "V", "X", "L", "C", "D", "M"];

  let res = "";

  for (let base = 10, index = 2; base <= 10 * 1000; base *= 10, index += 2) {
    const rest = num % 10;
    num -= rest;

    let l2 = list[index - 2];
    let l1 = list[index - 1];
    let l0 = list[index];

    if (rest == 1) res = l2 + res;
    else if (rest == 2) res = l2 + l2 + res;
    else if (rest == 3) res = l2 + l2 + l2 + res;
    else if (rest == 4) res = l2 + l1 + res;
    else if (rest == 5) res = l1 + res;
    else if (rest == 6) res = l1 + l2 + res;
    else if (rest == 7) res = l1 + l2 + l2 + res;
    else if (rest == 8) res = l1 + l2 + l2 + l2 + res;
    else if (rest == 9) res = l2 + l0 + res;

    num /= 10;
  }

  return res;
}
