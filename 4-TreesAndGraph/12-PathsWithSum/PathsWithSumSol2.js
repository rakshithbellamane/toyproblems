class BinaryTree {
  value;
  left;
  right;

  constructor (inputValue) {
    this.value = inputValue;
    this.left = null;
    this.right = null;
  }

  insertLeft (inputValue) {
    let child = new BinaryTree(inputValue);
    this.left = child;

    return child;
  }

  insertRight (inputValue) {
    let child = new BinaryTree(inputValue);
    this.right = child;

    return child;
  }

  countPathsWithSum (inputSum, pathSum=0, runningSum={}) {
    let pathCount = 0;

    pathSum += this.value;
    runningSum[pathSum] = runningSum[pathSum] ? (runningSum[pathSum] + 1) : 1;

    let leftPathCount = this.left ? this.left.countPathsWithSum(inputSum, pathSum, runningSum) : 0;
    let rightPathCount = this.right ? this.right.countPathsWithSum(inputSum, pathSum, runningSum) : 0;

    if (pathSum === inputSum) pathCount++;

    if (runningSum[pathSum - inputSum]) pathCount++

    runningSum[pathSum]--;

    return leftPathCount + rightPathCount + pathCount;
  }
}

let myBT = new BinaryTree(10);

let child1 = myBT.insertLeft(5);
let child2 = myBT.insertRight(-3);

let child3 = child1.insertLeft(3);
let child4 = child1.insertRight(2);

child3.insertLeft(3);
child3.insertRight(-2);

child4.insertRight(1);

child2.insertRight(11);

console.log(myBT.countPathsWithSum(8));