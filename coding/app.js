// https://www.hackerrank.com/challenges/reduced-string/problem
// baab => "Empty String"
// aacbb => "c"
const reduceFunction = s => {
  let i = 1;
  while (i < s.length) {
    if (s[i] === s[i-1]) {
      s = s.substring(0, i-1) + s.substring(i+1, s.length);
      i = i-1;
    } else i++;
  }
  return s;
};

const x = "kagoyzkgfjnyvjewazalxngpdcfahneqoqgiyjgpzobhaghmgzmnwcmeykqzgajlmuerhhsanpdtmrzibswswzjjbjqytgfewiuu";
const y ="kagoyzkgfjnyvjewazalxngpdcfahneqoqgiyjgpzobhaghmgzmnwcmeykqzgajlmuersanpdtmrzibswswzbjqytgfewi";
console.log(reduceFunction(x) === y);

