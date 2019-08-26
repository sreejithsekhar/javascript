function highestValuePalindrome(s, n, k) {


}

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