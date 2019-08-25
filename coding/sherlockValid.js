// https://www.hackerrank.com/challenges/sherlock-and-valid-string/problem
function isValid(s) {
    const charCountArray = Array(26);
    let index;
    for (let i of s) {
        index = i.charCodeAt() - 97;
        if (charCountArray[index]) charCountArray[index]++;
        else charCountArray[index] = 1;
    }
    console.log(charCountArray);
    let pCount;
    let missmatchFound = false;
    let diff = 0;
    let x, y1, y2;
    for (let i = 0; i < 26; i++) {
        if (charCountArray[i]) {
            if(!x) { x = charCountArray[i]; continue;}
            console.log(charCountArray[i])
            
        }   
    }
    return "YES";
}

// 2, 3, 3
// x =2, y 1 or 3, y =3, x = 2 or 3, x = 2, y = 2
// 3, 2, 3
// 3, 2, 2

console.log(isValid("aabbbccc"))
//console.log(isValid("aaabbccc"))
//console.log(isValid("aaabbbcc"))
