class Tree {
  val;
  left;
  right;

  constructor (value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }

  addLeftChild (val) {
    this.left = new Tree(val);

    return this.left;
  }

  addRightChild (val) {
    this.right = new Tree(val);
    
    return this.right;
  }

  inOrderRecursion (path=[]) {
    if (this.left) this.left.inOrderRecursion(path);
    path.push(this.val);
    if (this.right) this.right.inOrderRecursion(path);

    return path;
  }

  inOrderMorris () {
    let curNode = this;
    let path = [];

    while (curNode) {
      if (curNode.left) {
        curNode.predecessor = curNode.left;
        if (curNode.left.right) {
          curNode.left.right.successor = curNode;
        }
        else curNode.left.successor = curNode;

        curNode.left = null;
      } else if (curNode.predecessor) {
        curNode.left = curNode.predecessor;
        curNode.predecessor = null;
      }
      
      if (curNode.right) {
        if (curNode.successor) curNode.right.successor = curNode.successor;
        curNode.successor = curNode.right;

        curNode.right.restoreRight = true;
        curNode.right = null;
      } else if (curNode.successor && curNode.restoreRight) curNode.right = curNode.successor;

      if (!curNode.predecessor && !curNode.successor) {
        path.push(curNode.val);
        break;
      }

      if (curNode.predecessor) curNode = curNode.predecessor;
      else {
        path.push(curNode.val);
        curNode = curNode.successor;
      }
    }

    return path;
  }
}

let myTree = new Tree(1);

let node1 = myTree.addLeftChild(2);
let node2 = myTree.addRightChild(5);

node1.addLeftChild(3);
node1.addRightChild(4).addRightChild(8);

let node3 = node2.addLeftChild(6)
node3.addLeftChild(9);
node3.addRightChild(10);

node2.addRightChild(7);

console.log(myTree.inOrderRecursion());
console.log(myTree.inOrderMorris());