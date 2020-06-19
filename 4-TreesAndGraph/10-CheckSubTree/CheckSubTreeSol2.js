class BinaryTree {
  value;
  right;
  left;

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

  matchTrees (tree1, tree2) {
    let leftMatch, rightMatch;
    if (tree1.value !== tree2.value) return false;

    if (tree1.left && tree2.left) {
      leftMatch = this.matchTrees(tree1.left, tree2.left);
    } else if (!tree1.left && !tree2.left) {
      leftMatch = true;
    } else leftMatch = false;
    
    if (leftMatch && tree1.right && tree2.right) {
      rightMatch = this.matchTrees(tree1.right, tree2.right);
    } else if (leftMatch && !tree1.right && !tree2.right) {
      rightMatch = true;
    } else rightMatch = false;

    return leftMatch && rightMatch;
  }

  isSubTree (tree1, tree2) {
    if (tree1 === null) return false;

    if (tree1.value === tree2.value) return this.matchTrees(tree1, tree2);

    return this.isSubTree(tree1.left, tree2) || this.isSubTree(tree1.right, tree2);
  }
}

let myBT = new BinaryTree(1);
let child1 = myBT.insertLeft(2);
let child2 = myBT.insertRight(3);

child1.insertLeft(4);
child1.insertRight(5);

child2.insertLeft(6);
let child3 = child2.insertRight(7);
child3.insertLeft(8);
child3.insertRight(9);

let myBT2 = new BinaryTree(7);
myBT2.insertLeft(8);
myBT2.insertRight(9);

console.log(myBT.isSubTree(myBT, myBT2));