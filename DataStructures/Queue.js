class Queue {
  storage = {};
  head = 0;
  tail = 0;
  defaultSize = 50;
  queueSize = 0;

  constructor (size = this.defaultSize) {
    this.queueSize = size;
  }

  add = value => {
    if ((this.tail - this.head) === this.queueSize) return 'max queue size has reached';

    this.storage[this.tail++] = value;

    return (this.tail - this.head);
  }

  remove = () => {
    let value;

    if (this.head === this.tail) return null;

    value = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;

    return value;
  }

  queueCount = () => {
    return this.tail - this.head;
  }

  peek = () => {
    if (this.head === this.tail) return null;

    return this.storage[this.head];
  }

  print = () => {
    return this.storage;
  }
}

module.exports = Queue;
// let myQueue = new Queue(20);

// myQueue.add(10);
// myQueue.add(20);
// myQueue.add(30);
// myQueue.add(40);
// myQueue.add(50);
// myQueue.add(60);
// console.log(myQueue.peek());
// console.log(myQueue.queueCount());
// console.log(myQueue.print());
// myQueue.remove();
// myQueue.remove();
// console.log(myQueue.peek());
// console.log(myQueue.queueCount());
// console.log(myQueue.print());
// myQueue.remove();
// myQueue.remove();
// myQueue.remove();
// myQueue.remove();
// console.log(myQueue.peek());
// console.log(myQueue.queueCount());
// console.log(myQueue.print());