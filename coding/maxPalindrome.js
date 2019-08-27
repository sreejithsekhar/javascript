let word;
/*
 * Complete the 'initialize' function below.
 *
 * The function accepts STRING s as parameter.
 */

function initialize(s) {
  // This function is called once before all queries.
  word = s;
}

/*
 * Complete the 'answerQuery' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER l
 *  2. INTEGER r
 */

function answerQuery(l, r) {
  // Return the answer for this query modulo 1000000007.
  const s = word.slice(l - 1, r);
  const wordCount = Array(26);
  for (let i of s) {
    if (!wordCount[i.charCodeAt() - 97]) wordCount[i.charCodeAt() - 97] = 1;
    else wordCount[i.charCodeAt() - 97]++;
  }
  const countMap = {};
  for (let i of wordCount) {
    if (i > 1) {
      if (i % 2 === 0) {
        if (countMap[i]) countMap[i]++;
        else countMap[i] = 1;
      } else {
        if (countMap[i - 1]) countMap[i - 1]++;
        else countMap[i - 1] = 1;
        if (countMap[1]) countMap[1]++;
        else countMap[1] = 1;
      }
    } else if (i === 1) {
      if (countMap[1]) countMap[1]++;
      else countMap[1] = 1;
    }
  }
  console.log(Object.values(countMap).reduce((acc, c) => acc * c, 1));
}

initialize("week");
answerQuery(1, 4);
// input
// week
// 2
// 1 4
// 2 3
// output
// 2
// 1
