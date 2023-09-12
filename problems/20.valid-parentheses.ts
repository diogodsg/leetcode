function isValid(s: string): boolean {
  const stack: string[] = [];

  let table = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let c of s) {
    if (["(", "[", "{"].includes(c)) stack.push(c);
    else if (stack.pop() !== table[c]) return false;
  }
  return !stack.length;
}
