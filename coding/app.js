const reduceCounter = x => {
  const char_list = [x[0]];
  const char_count = [1];
  let j = 0;
  for (let i = 1; i < x.length; i++) {
    if (char_list[j] === x[i]) {
      char_count[j]++;
    } else {
      char_count[j] = char_count[j] % 2;
      if (char_count[j] !== 0) {
        j++;
      }
      char_list[j] = x[i];
      char_count[j] = 1;
    }
  }
  char_count[j] = char_count[j] % 2;
  if (char_count[j] === 0) char_list[j] = "";
  return [char_list.join(""), x];
};

const reduceFunction = x => {
  if (x.length === 1) return x;
  let rWords = [x];
  while(rWords[0] && rWords[0] !== rWords[1]) {
    rWords = reduceCounter(rWords[0]);
  }
  return rWords[0];
};

const x = "kagoyzkgfjnyvjewazalxngpdcfahneqoqgiyjgpzobhaghmgzmnwcmeykqzgajlmuerhhsanpdtmrzibswswzjjbjqytgfewiuu";
const y ="kagoyzkgfjnyvjewazalxngpdcfahneqoqgiyjgpzobhaghmgzmnwcmeykqzgajlmuersanpdtmrzibswswzbjqytgfewi";
console.log(reduceFunction(x) === y);
