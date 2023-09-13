function generateParenthesis(n: number): string[] {
  let combinations: string[] = [];

  const addParenthesis = (
    stack: string[] = [],
    combination: string = "",
    left: number = n
  ): void => {
    if (left === 0 && stack.length === 0) combinations.push(combination);

    if (left) addParenthesis([...stack, "("], combination + "(", left - 1);

    if (stack.length)
      addParenthesis(stack.slice(0, -1), combination + ")", left);
  };

  addParenthesis();

  return combinations;
}
