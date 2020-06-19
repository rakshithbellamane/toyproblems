const Stack = require('../../DataStructures/Stack');

class SortStack {
  unSortedStack = new Stack();
  sortedStack = new Stack();

  push = value => {
    this.unSortedStack.push(value);
  }

  sort = () => {
    if (this.unSortedStack.count === 0) return undefined;

    let value = this.unSortedStack.pop();

    if (value <= this.sortedStack.peek()) {
      this.sortedStack.push(value);
    } else {
      while (this.sortedStack.count !== 0 || value <= this.sortedStack.peek()) {
        this.unSortedStack.push(this.sortedStack.pop());
      }
      this.sortedStack.push(value);
    }

    this.sort();
  }

  pop = () => {
    this.sort();
    return this.sortedStack.pop();
  }

  peek = () => {
    this.sort();
    return this.sortedStack.peek();
  }

  isEmpty = () => {
    return this.unSortedStack.count === 0 && this.sortedStack.count === 0;
  }
}

let myStack = new SortStack();
myStack.push(5);
myStack.push(3);
myStack.push(10);
myStack.push(1);
myStack.push(2);
console.log(myStack.unSortedStack.print());
console.log(myStack.sortedStack.print());

console.log(myStack.peek());
console.log(myStack.unSortedStack.print());
console.log(myStack.sortedStack.print());

console.log(myStack.pop());
console.log(myStack.unSortedStack.print());
console.log(myStack.sortedStack.print());

myStack.push(8);
console.log(myStack.peek());
console.log(myStack.unSortedStack.print());
console.log(myStack.sortedStack.print());