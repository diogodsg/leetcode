function getOddPalindromeWithCenterAt(s: string, index: number): string {
  let distance = 1;
  let count = 1;
  while (index - distance >= 0 && index + distance < s.length) {
    if (s[index - distance] !== s[index + distance]) break;
    distance++;
    count += 2;
  }
  return s.slice(index - distance + 1, index + distance);
}

function getEvenPalindromeWithCenterAt(s: string, index: number): string {
  if (index == 0) return s[0];
  let distance = 1;
  let count = 1;

  if (s[index] !== s[index - 1]) return s[index];

  while (index - distance - 1 >= 0 && index + distance < s.length) {
    if (s[index - distance - 1] !== s[index + distance]) break;
    distance++;
    count += 2;
  }
  return s.slice(index - distance, index + distance);
}

function longestPalindrome(s: string): string {
  if (s.length < 2) return s;

  let longestFound = "";
  for (let i = 0; i < s.length; i++) {
    let palindrome = getOddPalindromeWithCenterAt(s, i);

    if (palindrome.length > longestFound.length) longestFound = palindrome;

    palindrome = getEvenPalindromeWithCenterAt(s, i);

    if (palindrome.length > longestFound.length) longestFound = palindrome;
  }
  return longestFound;
}
