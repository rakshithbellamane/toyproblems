const Stack = require('../../DataStructures/Stack');

class QueueViaStack {
  stackNew = new Stack();
  stackOld = new Stack();

  add = value => {
    this.stackNew.push(value);
  }

  shiftNewToOld = () => {
    while (this.stackNew.count > 0) {
      this.stackOld.push(this.stackNew.pop());
    }
  }

  remove = () => {
    if (this.stackOld.count === 0) this.shiftNewToOld();

    let value = this.stackOld.pop();

    return value;
  }

  peek = () => {
    if (this.stackOld.count === 0) this.shiftNewToOld();

    return this.stackOld.peek();
  }
}

let myQueue = new QueueViaStack();
myQueue.add(1);
myQueue.add(2);
myQueue.add(3);
myQueue.add(4);
myQueue.add(5);
myQueue.add(6);
myQueue.add(7);
console.log(myQueue.stackNew.print());
console.log(myQueue.stackOld.print());
console.log(myQueue.remove());
console.log(myQueue.remove());
console.log(myQueue.stackNew.print());
console.log(myQueue.stackOld.print());
myQueue.add(8);
myQueue.add(9);
console.log(myQueue.stackNew.print());
console.log(myQueue.stackOld.print());
console.log(myQueue.remove());
console.log(myQueue.remove());
console.log(myQueue.remove());
console.log(myQueue.stackNew.print());
console.log(myQueue.stackOld.print());
