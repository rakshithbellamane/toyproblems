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
    let leftBT = new BinaryTree(inputValue);
    this.left = leftBT;

    return leftBT;
  }

  insertRight (inputValue) {
    let rightBT = new BinaryTree(inputValue);
    this.right = rightBT;

    return rightBT;
  }

  isBST () {
    let min=null;
    let max=null;

    const checkBST = (node, min, max) => {
      if (node === null) return true;

      if ((min !== null && node.value <= min) || (max !== null && node.value > max)) return false;

      if (!checkBST(node.left, min, node.value) || !checkBST(node.right, node.value, max)) return false;

      return true;
    }

    return checkBST(this, null, null);
  }
}

let myBT = new BinaryTree(10);
let branch1 = myBT.insertLeft(8);
let branch2 = myBT.insertRight(13);

let branch3 = branch1.insertLeft(6);
let branch4 = branch1.insertRight(9)

branch3.insertRight(7);

branch2.insertLeft(12);
branch2.insertRight(14);

console.log(myBT.isBST());