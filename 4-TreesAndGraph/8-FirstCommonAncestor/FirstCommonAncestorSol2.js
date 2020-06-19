class BinaryTree {
  value;
  left;
  right;
  parent;

  constructor (inputValue) {
    this.value = inputValue;
    this.left = null;
    this.right = null;
    this.parent = null;
  }

  insert (inputValue) {
    let child = new BinaryTree(inputValue);

    child.parent = this;

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

  getSibling () {
    let parent = this.parent;

    return parent.left === this ? parent.right : parent.left;
  }


  findCommonAncestor (node1, node2) {
    // if node1 is the ancestor of node2, return node1
    if (node1.findNode(node2)) return node1;

    // if node2 is the ancestor of node1, return node2
    if (node2.findNode(node1)) return node2;

    // if both have common parent return the parent
    if (node1.parent === node2.parent) return node1.parent;

    // search the sibling branch of node1 to see if it has node2
    let sibling = node1.getSibling();
    if (sibling.findNode(node2)) {
      // if the sibling branch has node2, then return the parent as the ancestor
      return node1.parent;
    } else {
      // move up the node1 branch and repeat the process
      return this.findCommonAncestor(node1.parent, node2);
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

console.log(myBT.findCommonAncestor(child2, child8));
