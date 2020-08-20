// store the input stream in a Binary Search Tree
class BST {
  value;
  left;
  right;
  numLeft;

  constructor (inputValue) {
    this.value = inputValue;
    this.left = null;
    this.right = null;
    // this is a counter that keeps track of number of elements in the left subtree
    this.numLeft = 0;
  }

  // this is a regular BST insert
  insert (inputValue) {
    if (inputValue <= this.value) {
      // whenever we go to the left, increment the left counter of the node
      this.numLeft++;
      if (this.left) this.left.insert(inputValue);
      else {
        let node = new BST(inputValue);
        this.left = node;
      }
    } else {
      if (this.right) this.right.insert(inputValue);
      else {
        let node = new BST(inputValue);
        this.right = node;
      }
    }
  }

  // finds the rank/position of the input element
  findRank (inputValue) {
    // base case return the num of elements to the left of the matching node
    if (inputValue === this.value) {
      return this.numLeft;
    }

    // if the input value is in the left subtree, just return the rank searching the left subtree
    if (inputValue < this.value && this.left) 
      return this.left.findRank(inputValue);

    
    if (inputValue > this.value && this.right) {
      // try to find the input int he right subtree
      let rightRank = this.right.findRank(inputValue);

      // if the input value is in the right sub tree, 
      // return left children count 
      // + rank returned by searching the right subtree
      // + 1 for self

      // if the input value is NOT in the right sub tree, return NULL
      return rightRank !== null ? this.numLeft+rightRank+1 : null;
    }

    // if the input value is neither in the left or right subtrees return null
    return null;
  }
}

let stream = [1,4,4,5,9,7,13,3];
let myBST = new BST(5);
stream.forEach(ele => myBST.insert(ele));
console.log(myBST.findRank(18));