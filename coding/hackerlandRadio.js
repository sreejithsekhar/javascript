function insertTree(item, tree) {
  console.log("input tree", tree);
  if (!tree) return { value: item };
  else if (tree.value > item) tree = insertTree(item, tree.right);
  else tree = insertTree(item, tree.left);
}

function createTree(arr) {
  let tree;
  for (let i of arr) {
    console.log(i);
    tree = insertTree(i, tree);
    console.log("output tree", tree);
  }
  return tree;
}
function hackerlandRadioTransmitters(x, k) {
  console.log(createTree(k));
  const sorted = k.sort(function(a, b) {
    return a - b;
  });
  //console.log(sorted);
}
hackerlandRadioTransmitters(2, [7, 2, 4, 6, 5, 9, 12, 11]); // 3

// 2 4 5 6 7 9 11 12

// start at min -> 2
// add 2x to min -> 6 and find next available item
