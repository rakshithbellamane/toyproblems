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
        this.size++;
      } else {
        let child = new BST(inputValue);
        this.left = child;
        this.size++;

        return child;
      }
    } else {
      if (this.right) {
        this.right.insert(inputValue);
        this.size++;
      } else {
        let child = new BST(inputValue);
        this.right = child;
        this.size++;

        return child;
      }
    }
  }

  getRandomNode () {
    // Math.random generates a random float between 0 and 1 (excluding 1).
    // So, in order to ensure the root node also equal chance, we need to add 1 when calculating the random number.
    let index = Math.floor(Math.random() * (this.size + 1));
    let node = null;

    if (index === this.size || this.size === 1) {
      node = this;
    } else if (index <= this.left.size) {
      node = this.left.getRandomNode();
    } else {
      node = this.right.getRandomNode();
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
