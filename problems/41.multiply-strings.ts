function multiply(num1: string, num2: string): string {
  if (num1 === "0" || num2 === "0") return "0";
  num1 = [...num1].reverse().join("");
  num2 = [...num2].reverse().join("");

  const res = new Array(num1.length + num2.length).fill(0);

  for (let i = 0; i < num1.length; i++) {
    for (let j = 0; j < num2.length; j++) {
      let digit = +num1[i] * +num2[j];

      res[i + j] += digit;
      res[i + j + 1] += Math.floor(res[i + j] / 10);
      res[i + j] = res[i + j] % 10;
    }
  }
  return res.reverse().join("").replace(/^0/, "");
}
