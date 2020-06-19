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

  preOrderTraverse (inputBT, result=[]) {
    result.push(inputBT.value);
    if (inputBT.left) {
      this.preOrderTraverse (inputBT.left, result);
    } else {
      result.push('X');
    }

    if (inputBT.right) {
      this.preOrderTraverse (inputBT.right, result);
    } else {
      result.push('X');
    }

    return result.join('');
  }

  isSubTree (inputBT) {
    let str1 = this.preOrderTraverse(this);
    let str2 = this.preOrderTraverse(inputBT);

    console.log(str1);
    console.log(str2);

    return str1.includes(str2);
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

console.log(myBT.isSubTree(child2));