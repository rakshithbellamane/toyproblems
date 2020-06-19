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
    if (this === node1 || this === node2) return this;

    let x = this.left ? this.left.findCommonAncestor(node1, node2) : null;
    if (x && (this === node1 || this === node2)) return this;

    let y = this.right ? this.right.findCommonAncestor(node1, node2) : null;
    if (y && (this === node1 || this === node2)) return this;

    if (x && y) return this;

    if (!x && !y) return null;

    return x ? x : y;
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

console.log(myBT.findCommonAncestor(child3, child8));
