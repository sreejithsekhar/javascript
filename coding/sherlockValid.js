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
    let pCount = charCountArray[0];
    let missmatchFound = false;
    let diff = 0;

    for (let i = 1; i < 26; i++) {
        if (charCountArray[i]) {
            diff = Math.abs(pCount - charCountArray[i]);
            console.log("char", charCountArray[i])
            console.log("diff", diff)
            if (diff > 1) return "NO";
            else if (diff === 1) {
                if (!missmatchFound) missmatchFound = true;
                else return "NO";
            } 
        }   
    }
    return "YES";
}