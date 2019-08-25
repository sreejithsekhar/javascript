// https://www.hackerrank.com/challenges/sherlock-and-valid-string/problem
function isValid(s) {
  const charCountArray = Array(26);
  let index;
  for (let i of s) {
    index = i.charCodeAt() - 97;
    if (charCountArray[index]) charCountArray[index]++;
    else charCountArray[index] = 1;
  }
  console.log(charCountArray)
  const counts = [0, 0, 0, 0];
  for (let i = 0; i < 26; i++) {
    if (charCountArray[i]) {
      if (!counts[0]) {
        counts[0] = charCountArray[i];
        counts[1] = 1;
      } else if (counts[0] === charCountArray[i]) counts[1]++;
      else if (!counts[2]) {
        counts[2] = charCountArray[i];
        counts[3] = 1;
      } else if (counts[2] === charCountArray[i]) counts[3]++;
      else return "NO";
    }
  }
  console.log(counts)
  if ((counts[1] === counts[3]) || !counts[2]) return "YES1";
  if ((counts[0] === 1 && counts[1] === 1) || (counts[2] === 1 && counts[3] === 1)) return "YES2";
  if (counts[0] > counts[2]) return (counts[1] === 1)? "YES3" : "NO";
  if (counts[2] > counts[0]) return (counts[3] === 1)? "YES4" : "NO";
  return "YES5";
}

// console.log(
//   isValid(
//     "ibfdgaeadiaefgbhbdghhhbgdfgeiccbiehhfcggchgghadhdhagfbahhddgghbdehidbibaeaagaeeigffcebfbaieggabcfbiiedcabfihchdfabifahcbhagccbdfifhghcadfiadeeaheeddddiecaicbgigccageicehfdhdgafaddhffadigfhhcaedcedecafeacbdacgfgfeeibgaiffdehigebhhehiaahfidibccdcdagifgaihacihadecgifihbebffebdfbchbgigeccahgihbcbcaggebaaafgfedbfgagfediddghdgbgehhhifhgcedechahidcbchebheihaadbbbiaiccededchdagfhccfdefigfibifabeiaccghcegfbcghaefifbachebaacbhbfgfddeceababbacgffbagidebeadfihaefefegbghgddbbgddeehgfbhafbccidebgehifafgbghafacgfdccgifdcbbbidfifhdaibgigebigaedeaaiadegfefbhacgddhchgcbgcaeaieiegiffchbgbebgbehbbfcebciiagacaiechdigbgbghefcahgbhfibhedaeeiffebdiabcifgccdefabccdghehfibfiifdaicfedagahhdcbhbicdgibgcedieihcichadgchgbdcdagaihebbabhibcihicadgadfcihdheefbhffiageddhgahaidfdhhdbgciiaciegchiiebfbcbhaeagccfhbfhaddagnfieihghfbaggiffbbfbecgaiiidccdceadbbdfgigibgcgchafccdchgifdeieicbaididhfcfdedbhaadedfageigfdehgcdaecaebebebfcieaecfagfdieaefdiedbcadchabhebgehiidfcgahcdhcdhgchhiiheffiifeegcfdgbdeffhgeghdfhbfbifgidcafbfcd"
//   )
// );
// console.log(isValid("aabbbccc"));
// console.log(isValid("aaabbccc"));
// console.log(isValid("aaabbbcc"));
// console.log(isValid("aaaabbbcc"));
// console.log(isValid("a"))
// console.log(isValid("ab"))
// console.log(isValid("abb"))
console.log(isValid("aabbcd"))

