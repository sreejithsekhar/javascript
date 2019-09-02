function icecreamParlor(m, arr) {
  const iceMap = {};
  for (let i = 0; i < arr.length; i++) {
    if (!iceMap[arr[i]]) iceMap[arr[i]] = [1, i + 1];
    else {
      iceMap[arr[i]][0]++;
      iceMap[arr[i]].push(i + 1);
    }
  }
  let diff;
  for (let i = 0; i < arr.length; i++) {
    diff = m - arr[i];
    if (iceMap[diff]) {
      let [count, ...index] = [...iceMap[diff]];
      if (diff === arr[i]) {
        if (count > 1) {
          return [i + 1, index[1]];
        }
      } else {
        return [i + 1, index[0]];
      }
    }
  }
}

console.log(icecreamParlor(8, [2,1,9,4,4,56,90,3]))
