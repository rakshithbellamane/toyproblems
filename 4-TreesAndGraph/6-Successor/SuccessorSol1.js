class BinarySearchTree {
  value;
  left;
  right;
  parent;

  constructor(inputValue) {
    this.value = inputValue;
    this.left = null;
    this.right = null;
    this.parent = null;
  }

  insert (inputValue) {
    let child = null;

    if (inputValue <= this.value) {
      if (this.left) {
        child = this.left.insert(inputValue);
      } else {
        child = new BinarySearchTree(inputValue);
        this.left = child;
        child.parent = this;
      }
    } else {
      if (this.right) {
        child = this.right.insert(inputValue);
      } else {
        child = new BinarySearchTree(inputValue);
        this.right = child;
        child.parent = this;
      }
    }

    return child;
  }

  leftMostChild (node) {
    if (node === null) return null;

    while (node.left) node = node.left;

    return node;
  }

  inOrderSuccessor (inputNode) {
    if (inputNode === null) return null;

    if (inputNode.right) {
      return this.leftMostChild(inputNode.right);
    } else {
      let node = inputNode;
      let nodeParent = inputNode.parent;

      while (nodeParent !== null && nodeParent.left !== node) {
        node = nodeParent;
        nodeParent = node.parent;
      }
      return nodeParent;
    }
  }
}

let myBST = new BinarySearchTree(10);
myBST.insert(8);
let node = myBST.insert(9);
myBST.insert(6);
myBST.insert(7);
myBST.insert(20);
myBST.insert(12);
myBST.insert(25);
myBST.insert(11);
myBST.insert(22);

console.log(myBST.inOrderSuccessor(node).value);
