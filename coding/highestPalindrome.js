function highestValuePalindrome(s, n, k) {
  let possibilities = k;
  const mid = Math.floor(n / 2);
  const part1 = s.slice(0, mid).split("");
  let part2,
    midValue = "";
  if (n % 2 === 0) {
    part2 = s.slice(mid);
  } else {
    part2 = s.slice(mid + 1);
    midValue = s[mid];
  }
  part2 = part2.split("");

  const diffList = Array(mid);

  for (let i = 0, j = part2.length - 1; i < part1.length; i++, j--) {
    if (part1[i] !== part2[j]) {
      if (possibilities >= 1) {
        if (part1[i] > part2[j]) part2[j] = part1[i];
        else part1[i] = part2[j];
        diffList[i] = 1;
        possibilities--;
      } else return -1;
    }
  }

  for (let i = 0, j = part2.length - 1; i < part1.length; i++, j--) {
    if (possibilities >= 1 && part1[i] !== "9") {
      if (diffList[i] === 1) {
        part1[i] = "9";
        part2[j] = "9";
        possibilities--;
      } else if (possibilities >= 2) {
        part1[i] = "9";
        part2[j] = "9";
        possibilities -= 2;
      }
    }
  }

  if (midValue && possibilities >= 1) {
    midValue = 9;
  }
  return `${part1.join("")}${midValue}${part2.join("")}`;
}
// console.log(highestValuePalindrome("3843", 4, 3));
// console.log(highestValuePalindrome("38193", 5, 2));
// console.log(highestValuePalindrome("0011", 4, 1))
// console.log(highestValuePalindrome("9999", 4, 1))
console.log(highestValuePalindrome("932239", 6, 2))
// 992299

