class Tree {
  value;
  children = [];

  constructor (value) {
    this.value = value;
  }

  addChild (value) {
    let child = new Tree(value);
    this.children.push(child);

    return child;
  }

  traverseDepthFirst (callback) {
    this.children.forEach(child => {
      child.traverseDepthFirst(callback);
    })
    callback(this);
  }

  traverseBreadthFirst (callback) {
    let queue = [this];
    while (queue.length) {
      let node = queue.shift();
      callback(node);
      node.children.forEach(child => queue.push(child));
    }
  }

  contains (value) {
    if (this.value === value) return true;

    for (let i=0; i<this.children.length; i++) {
      if (this.children[i].contains(value)) return true;
    }

    return false;
  }
}

let tree = new Tree(1);
let branch1 = tree.addChild(2);
let branch2 = tree.addChild(3);
let branch3 = tree.addChild(4);

branch1.addChild(5);
branch2.addChild(6);
branch3.addChild(7);

let depthFirstArr = [];
tree.traverseDepthFirst(node => depthFirstArr.push(node.value));
console.log(depthFirstArr);

let breadthFirstArr = [];
tree.traverseBreadthFirst(node => breadthFirstArr.push(node.value));
console.log(breadthFirstArr);

console.log(tree.contains(5));
