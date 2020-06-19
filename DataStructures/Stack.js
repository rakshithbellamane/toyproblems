class Stack {
  storage = {};
  count = 0;
  stackSize = 50;
  defaultStackSize = 50;

  constructor (size = this.defaultStackSize) {
    this.stackSize = size;
  }

  push (value) {
    if (this.count === this.stackSize) return 'max size has reached. Remove an item to add more';

    this.storage[this.count++] = value;
    
    return this.count;
  }

  pop () {
    let value;

    if (this.count === 0) return null;

    value = this.storage[--this.count];
    delete this.storage[this.count];

    return value;
  }

  peek () {
    if (this.count === 0) return null;

    return this.storage[this.count - 1];
  }

  stackCount () {
    return this.count;
  }

  contains (value) {
    let index = this.count - 1;

    while (index >= 0) {
      if (this.storage[index] === value) return true;

      index--;
    }

    return false;
  }

  print () {
    // let index = this.count - 1;
    // let stackValues = [];

    // while (index >= 0) {
    //   stackValues.push(this.storage[index])

    //   index--;
    // }

    // return stackValues.toString(',');
    return this.storage;
  }
}

module.exports = Stack;

// let myStack = new Stack(10);
// myStack.push(10);
// myStack.push(20);
// myStack.push(30);
// myStack.push(40);
// myStack.push(50);
// myStack.push(60);
// console.log(myStack.peek());
// console.log(myStack.stackCount());
// console.log(myStack.print());
// console.log(myStack.contains(50));
// myStack.pop();
// myStack.pop();
// console.log(myStack.peek());
// console.log(myStack.stackCount());
// console.log(myStack.print());
// console.log(myStack.contains(50));
