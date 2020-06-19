const Stack = require('../../DataStructures/Stack');

class MinStack extends Stack {
  minStack;

  constructor (size) {
    super(size);
    this.minStack = new Stack(size);
  }

  push = value => {
    let minValue = this.minStack.peek();
    if (!minValue || this.minStack.peek() >= value) this.minStack.push(value);
    
    super.push(value);
  }

  pop = () => {
    let value = super.pop();

    if (value === this.minStack.peek()) this.minStack.pop();

    return value;
  }

  peek = () => {
    super.peek();
  }

  min = () => {
    return this.minStack.peek();
  }

  print = () => {
    return super.print();
  }
}

let myStack = new MinStack(10);
myStack.push(10);
myStack.push(9);
myStack.push(12);
myStack.push(4);
myStack.push(20);
myStack.push(1);
console.log(myStack.print());
console.log(myStack.min());

myStack.pop();
console.log(myStack.print());
console.log(myStack.min());

myStack.pop();
myStack.pop();
console.log(myStack.print());
console.log(myStack.min());