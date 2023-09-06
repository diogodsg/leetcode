function isPalindrome(x: number): boolean {
  let myList: number[] = [];
  if (x < 0) return false;
  for (;;) {
    if (x <= 0) break;

    myList.push(x % 10);
    x -= x % 10;
    x /= 10;
  }
  for (let i = 0; i < myList.length - i - 1; i++) {
    if (myList[i] !== myList[myList.length - i - 1]) return false;
  }
  return true;
}
