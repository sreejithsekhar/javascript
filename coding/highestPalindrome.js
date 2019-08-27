function highestValuePalindrome(s, n, k) {
  const mid = Math.floor(n / 2);
  const part1 = s.slice(0, mid);
  let part2, midValue;
  if (n % 2 === 0) {
    part2 = s.slice(mid);
  } else {
    part2 = s.slice(mid + 1);
    midValue = s[mid];
  }
  console.log("part1", part1);
  console.log("part2", part2);
  console.log("mid value", midValue)

  let diff = 0;

  for (let i = 0, j = part2.length-1; i < part1.length; i++, j--) {
    console.log("p1", part1[i])
    console.log("p2", part2[j])
    if (part1[i] !== part2[j]) {
        diff++;
    }
  }

  console.log("diff", diff)

}
highestValuePalindrome("3843", 4, 1);
// first make it palindrome with highest digit present keep the array offset somewhere decrement k by one
// if k is greater than 1 then start making digits on either side 9 check the offset array whether it is already touched if touched then make both nine but decrement k only once if not touched the decrement k by 2
// if k is greater than one then change mid point to 9

//highestValuePalindrome("38543", 5, 1);

// 0 1 |2| 3
// 3 8 |4| 3

// 0 -> 3 8 4 3  3 4 8 3
// 1 -> 8 4 3      4 8 3
// 2 -> 4 3          8 3
// 3 -> 3              3

// 2
// 0 1 2 3 |4| 5 6 7 8
// 5 4 4 2 |1| 3 4 6 5

// 0 -> 5 4 4 2 1 3 4 6 5  5 6 4 3 1 2 4 4 5
// 1 -> 4 4 2 1 3 4 6 5      6 4 3 1 2 4 4 5
// 2 -> 4 2 1 3 4 6 5          4 3 1 2 4 4 5
// 3 -> 2 1 3 4 6 5              3 1 2 4 4 5
// 4 -> 1 3 4 6 5                  1 2 4 4 5
// 5 -> 3 4 6 5                      2 4 4 5
// 6 -> 4 6 5                          4 4 5
// 7 -> 6 5                              4 5
// 8 -> 5                                  5

// pseudo
// // s given String, m no of tries
// r = reverse(s)
// ss = suffixArray(s)
// rs = suffixArray(r)
// if (ss === rs) "palindrome"
// mid = Math.ceil(s.length / 2);
// [d, max] = findDifferenceAndPalindrome(ss[mid], rs[mid])
// if (d > m) return -1;
// return max;
