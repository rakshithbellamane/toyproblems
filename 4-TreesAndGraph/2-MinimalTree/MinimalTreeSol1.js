class MinimalTree {
  value;
  left;
  right;

  constructor (input) {
    this.value = input;
    this.left = null;
    this.right = null;
  }

  traverseDepthFirst (list=[]) {
    if (this.left) this.left.traverseDepthFirst(list);
    if (this.right) this.right.traverseDepthFirst(list);
    list.push(this.value);
    
    return list;
  }
}

const createMinimalBST = (inputArray) => {
  let root;
  let middleIndex;

  if (inputArray.length === 1) {
    root = new MinimalTree(inputArray[0]);
    root.left = null;
    root.right = null;
  } else if (inputArray.length === 2) {
    root = new MinimalTree(inputArray[1]);
    root.left = new MinimalTree(inputArray[0]);;
    root.right = null;
  }
  else {
    middleIndex = Math.trunc(inputArray.length/2);
    root = new MinimalTree(inputArray[middleIndex]);
  
    root.left = createMinimalBST(inputArray.slice(0,middleIndex));
    root.right = createMinimalBST(inputArray.slice(middleIndex+1));
  }

  return root;
}

let myArray = [1,2,3,4,5,6,7,8,9];
let myMinBST = createMinimalBST(myArray);
console.log(myMinBST.traverseDepthFirst());

