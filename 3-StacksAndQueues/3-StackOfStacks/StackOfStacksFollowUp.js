const Stack = require('../../DataStructures/Stack');

class StackOfStack {
  stacks = [];
  topStackIndex = 0;
  defaultSize = 3;
  stackSize;

  constructor (size=this.defaultSize) {
    let stack = new Stack(size);
    this.stackSize = size;
    
    this.stacks.push(stack);
  }

  isStackFull = stack => {
    return stack.count === stack.stackSize ? true : false;
  }

  isStackEmpty = stack => {
    return stack.count === 0 ? true : false;
  }

  push = value => {
    let curStack = this.stacks[this.topStackIndex];

    // if top stack is full, then create a new stack and push the value
    if (this.isStackFull(curStack)) {
      let newStack = new Stack(this.stackSize);
      newStack.push(value);

      this.stacks.push(newStack);
      this.topStackIndex++;

    // just push the value to top stack
    } else {
      curStack.push(value);
    }
  }

  // rearranges the stack elements after popping the bottom element by pushing the elements down the stack
  rearrangeStack = curIndex => {
    let stackCount = this.stacks[curIndex].count;
    let stackSize = this.stacks[curIndex].stackSize;

    // if there are elements in the stack, start pushing down the elements
    if (stackCount > 0) {
      let i = 0;
      let j = 0;

      // since the bottom element was popped, the stackCount will be one less
      while (j < stackCount) {
        this.stacks[curIndex].storage[i] = this.stacks[curIndex].storage[i+1];
        i++;
        j++;
      }

      // empty the last element of the stack
      this.stacks[curIndex].storage[j] = null;

    // since the given stack is empty, update the topstack index and delete the given stack
    } else {
      this.topStackIndex--;
      delete this.stacks[curIndex];
    }
  }

  popBottom = curIndex => {
    // bottom is always 0th index element. Empty it and update the count in the stack
    let value = this.stacks[curIndex].storage[0];
    this.stacks[curIndex].storage[0] = null;
    this.stacks[curIndex].count--;

    return value;
  }

  // recursively left shift elements
  shiftLeft = curIndex => {
    // base case: stop recursing when given stack index is greater than the top stack index
    if (curIndex > this.topStackIndex) return false;

    // pop the bottom element of the given stack
    let value = this.popBottom(curIndex);

    // push the bottom element into the previous stack
    this.stacks[curIndex-1].push(value);

    // rearrange the elements of the given stack
    this.rearrangeStack(curIndex);

    // shift left elements from next stack to given stack
    this.shiftLeft(curIndex+1);
  }

  pop = stackIndex => {
    if (this.isStackEmpty(this.stacks[stackIndex])) {
      return 'stack is empty'
    }
    let value = this.stacks[stackIndex].pop();

    // start shifting left, elements from next stack unless the given stack is the top stack index
    if (stackIndex !== this.topStackIndex) this.shiftLeft(stackIndex + 1);

    return value;
  }

  print = () => {
    return this.stacks;
  }
}

let myStack = new StackOfStack(3);
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
myStack.push(5);
myStack.push(6);
myStack.push(7);
myStack.push(8);
myStack.push(9);
console.log(myStack.print());

myStack.pop(0);
console.log(myStack.print());

myStack.pop(0);
console.log(myStack.print());

myStack.push(10);
myStack.push(11);
console.log(myStack.print());