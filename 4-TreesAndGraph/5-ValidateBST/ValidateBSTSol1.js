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
    let bstArray = [];
    const copyBST = node => {
      if (node === null) return;
      copyBST(node.left);
      bstArray.push(node.value);
      copyBST(node.right);
    }
    copyBST(this);
    for (let i=1; i<bstArray.length; i++) {
      if (bstArray[i-1] > bstArray[i]) return false;
    }
    
    return true;
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