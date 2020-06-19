class BST {
  value;
  left;
  right;
  size;

  constructor (inputValue) {
    this.value = inputValue;
    this.left = null;
    this.right = null;
    this.size = 1;
  }

  insert (inputValue) {
    if (inputValue <= this.value) {
      if (this.left) {
        this.left.insert(inputValue);
      } else {
        let child = new BST(inputValue);
        this.left = child;
      }
    } else {
      if (this.right) {
        this.right.insert(inputValue);
      } else {
        let child = new BST(inputValue);
        this.right = child;
      }
    }
    this.size++;
  }

  getRandomNode () {
    // Math.random generates a random float between 0 and 1 (excluding 1).
    // So, in order to ensure the root node also equal chance, we need to add 1 when calculating the random number.
    let index = Math.floor(Math.random() * (this.size + 1));
    console.log(index);
    
    return this.getIthNode(index);
  }

  getIthNode (index) {
    let node = null;
    let leftSize = this.left ? this.left.size : 0;

    if (index <= leftSize) {
      node = this.left.getIthNode(index);
    } else if (index === (leftSize + 1)) {
      node = this;
    } else {
      node = this.right.getIthNode(index - (leftSize + 1));
    }

    return node;
  }

  remove (node) {
    if (this.value <= node.value) {
      if (this === node) {

      } else {

      }
    } else {

    }
  }
}

let myBST = new BST(5);
myBST.insert(3);
myBST.insert(7);
myBST.insert(2);
myBST.insert(4);
myBST.insert(6);
myBST.insert(9);
myBST.insert(8);
myBST.insert(10);

console.log(myBST.getRandomNode())
