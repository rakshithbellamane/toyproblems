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

  getDepth (node) {
    let depth = 0;

    while (node !== null) {
      node = node.parent;
      depth++;
    }

    return depth;
  }

  findCommonAncestor (node1, node2) {
    // get the depths of node1 and node2 from the root
    let node1Depth = this.getDepth(node1);
    let node2Depth = this.getDepth(node2);

    // function to moveUp a given node by the given depth
    const moveUp = (node, depth) => {
      let delta = depth;
      let movedUpNode = node;
      
      while (delta > 0) {
        movedUpNode = movedUpNode.parent;
        delta--;
      }

      return movedUpNode;
    }

    // depending on which node is deeper, move that node up
    let first, second;
    if (node1Depth > node2Depth) {
      first = moveUp(node1, node1Depth - node2Depth);      
      second = node2;
    } else {
      first = moveUp(node2, node2Depth - node1Depth);
      second = node1;
    }
    
    //once the nodes are in the same level, keep moving up until we find the common ancestor
    while (first !== null && second !== null && first !== second) {
      first = first.parent;
      second = second.parent;
    }

    // if first or second is null, that means there was no common ancestor
    if (!first || !second) return null;

    // otherwise return either first or second
    return first;
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
