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

    if (this.isStackFull(curStack)) {
      let newStack = new Stack(this.stackSize);
      newStack.push(value);

      this.stacks.push(newStack);
      this.topStackIndex++;
    } else {
      curStack.push(value);
    }
  }

  pop = () => {
    if (this.isStackEmpty(this.stacks[this.topStackIndex])) {
      delete this.stacks[this.topStackIndex];

      if (this.topStackIndex > 0) {
        this.topStackIndex--;
      } else {
        return 'stack of stacks is empty';
      }
    }
    return this.stacks[this.topStackIndex].pop();
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
myStack.push(9);
console.log(myStack.print());

myStack.pop();
myStack.pop();
myStack.pop();
console.log(myStack.print());
