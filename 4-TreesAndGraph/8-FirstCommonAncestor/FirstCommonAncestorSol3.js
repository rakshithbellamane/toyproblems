class BinaryTree {
  value;
  left;
  right;

  constructor (inputValue) {
    this.value = inputValue;
    this.left = null;
    this.right = null;
  }

  insert (inputValue) {
    let child = new BinaryTree(inputValue);

    if (!this.left) {
      this.left = child;
    } else {
      this.right = child;
    }

    return child;
  }

  findNode (node) {
    if (node === null) return false;

    if (this === node) return true;

    return (this.left && this.left.findNode(node)) || (this.right && this.right.findNode(node));
  }

  findCommonAncestor (node1, node2) {
    // flags to determine whether the nodes are on left or right of the root
    let isNode1OnLeft, isNode2OnLeft;

    // if node1 is root, then node1 is the ancestor
    if (this === node1) return node1;

    // if node2 is root, then node2 is the ancestor
    if (this === node2) return node2;
    
    // if the root has a left node and left branch has the given node, set the flag
    isNode1OnLeft = this.left && this.left.findNode(node1) ? true : false;
    isNode2OnLeft = this.left && this.left.findNode(node2) ? true : false;

    // if nodes are on different branches, then we have found the common ancestor
    if (isNode1OnLeft !== isNode2OnLeft) return this;

    // if nodes are on same branch, then repeat the process
    if (isNode1OnLeft && isNode2OnLeft) {
      return this.left.findCommonAncestor(node1, node2);
    } else {
      return this.right.findCommonAncestor(node1, node2);
    }
  }
}

let myBT = new BinaryTree(1);
let child1 = myBT.insert(2);
let child2 = myBT.insert(3);

let child3 = child1.insert(4);
let child4 = child1.insert(6);

let child5 = child3.insert(5);

let child6 = child2.insert(7);
let child7 = child2.insert(8);

let child8 = child7.insert(9);

let myBT2 = new BinaryTree(10);

console.log(myBT.findCommonAncestor(child3, child4));
