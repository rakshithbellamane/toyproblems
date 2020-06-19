class BinarySearchTree {
  value;
  leftChild;
  rightChild;

  constructor (value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert (value) {
    if (value <= this.value) {
      if (this.left) {
        this.left.insert(value);
      } else {
        this.left = new BinarySearchTree(value);
      }
    } 
    if (value > this.value) {
      if (this.right) {
        this.right.insert(value);
      } else {
        this.right = new BinarySearchTree(value);
      }
    }
    return this;
  }

  contains (value) {
    if (this.value === value) return true;
    if (value < this.value && this.left) this.left.contains(value);
    if (value > this.value && this.right) this.right.contains(value);
    
    return false;
  }

  inOrderTraverse (callback) {
    if (this.left) this.left.inOrderTraverse(callback);
    callback(this);
    if (this.right) this.right.inOrderTraverse(callback);
  }

  preOrderTraverse (callback) {
    callback(this);
    if (this.left) this.left.preOrderTraverse(callback);
    if (this.right) this.right.preOrderTraverse(callback);
  }

  postOrderTraverse (callback) {
    if (this.left) this.left.postOrderTraverse(callback);
    if (this.right) this.right.postOrderTraverse(callback);
    callback(this);
  }

  isFullBinaryTree () {
    if (!this.left && !this.right) return true;

    if (this.left && this.right) return this.left.isFullBinaryTree() && this.right.isFullBinaryTree();
    
    return false;
  }

  countNodes () {
    let count = 0;

    this.inOrderTraverse (() => count++);
    
    return count;
  }

  isCompleteBinaryTree (index, nodeCount) {
    if (index > nodeCount) return false;

    let leftCompleteBinaryTree = true;
    let rightCompleteBinaryTree = true;

    if (this.left) {
      leftCompleteBinaryTree = this.left.isCompleteBinaryTree(2*index+1, nodeCount);
    }
    
    if (this.right) {
      rightCompleteBinaryTree = this.right.isCompleteBinaryTree(2*index+2, nodeCount);
    }
    
    return leftCompleteBinaryTree && rightCompleteBinaryTree;
  }

  isPerfectBinaryTree (index, nodeCount) {
    if (!this.left && !this.right && index <= nodeCount) return true;

    if (this.left && this.right) {
      let leftPerfectBinaryTree = this.left.isPerfectBinaryTree(2*index+1, nodeCount);
      let rightPerfectBinaryTree = this.right.isPerfectBinaryTree(2*index+2, nodeCount);

      return leftPerfectBinaryTree && rightPerfectBinaryTree;
    }

    return false;
  }
}

let myBST = new BinarySearchTree(10);
myBST.insert(5).insert(15).insert(8).insert(3).insert(20).insert(14);
// myBST.insert(5).insert(15).insert(8).insert(3).insert(7).insert(20).insert(14).insert(9);

let elements = [];
myBST.inOrderTraverse(node => {
  elements.push(node.value);
})
console.log(elements);

elements = [];
myBST.preOrderTraverse(node => {
  elements.push(node.value);
})
console.log(elements);

elements = [];
myBST.postOrderTraverse(node => {
  elements.push(node.value);
})
console.log(elements);

console.log(myBST.isFullBinaryTree());

let nodeCount = myBST.countNodes();
console.log(myBST.countNodes());
console.log(myBST.isCompleteBinaryTree(0, nodeCount));

console.log(myBST.isPerfectBinaryTree(0, nodeCount));
