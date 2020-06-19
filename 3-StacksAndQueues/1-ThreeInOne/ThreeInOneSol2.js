class ThreeInOneDynamicStack {
  storage = [];
  defaultSize = 4;
  stackSize = this.defaultSize;
  stackInfo = [];
  numStack = 3;

  constructor (size=this.defaultSize) {
    this.stackSize = size;

    this.stackInfo[0] = {
      topIndex : 0, // index next to last element in the stack
      count : 0, // count of elements in the stack
      capacity: this.stackSize, // capacity of the stack. Starts with stacksize, but can increase or decrease
    }

    for(let i=1; i< this.numStack; i++) {
      this.stackInfo[i] = {
        topIndex : i*size,
        count : 0,
        capacity: this.stackSize, 
      }
    }
  }

  isIndexWithinStackBoundary = (stackIndex, curIndex) => {
    let count = this.stackInfo[stackIndex].count;
    let index = this.stackInfo[stackIndex].topIndex - 1; // index is set to the last element

    while (count > 0) {
      if (curIndex === index) return true;
      
      // take care of wraparound. If index is 0, then prev index is last index of storage
      index = (index === 0) ? this.numStack * this.stackSize - 1 : index - 1;

      count--;
    }

    return false;
  }

  // gets the Next storage index from the given index and for the given stack
  getNextStorageIndex = (stackIndex, curIndex) => {
    let nextIndex;

    // take care of wraparound. If given index is last index of storage, then next index is 0
    nextIndex = (curIndex === this.numStack * this.stackSize - 1) ? 0 : curIndex + 1;

    // return the index only if index is inside the stack.
    return this.isIndexWithinStackBoundary(stackIndex, nextIndex) ? nextIndex : null;
  }

  // gets the Prev storage index from the given index and for the given stack
  getPrevStorageIndex = (stackIndex, curIndex) => {
    let prevIndex;

    // take care of wraparound. If given index is 0, then previous index last index of storage
    prevIndex = curIndex === 0 ? this.numStack * this.stackSize - 1 : curIndex - 1;

    // return index only if it is inside the stack
    return this.isIndexWithinStackBoundary(stackIndex, prevIndex) ? prevIndex : null; 
  } 

  // recursively shifts the stacks until a stack with available capacity is found
  shift = stackIndex => {
    // if the given stack is full, shift the next stack
    if (this.isStackFull(stackIndex)) {
      let nextStack = (stackIndex + 1) % this.numStack;
      this.shift(nextStack);
    }

    // since the given stack is NOT full, shift the elements
    let {topIndex, count} = this.stackInfo[stackIndex];

    let nextStorageIndex = topIndex; // topIndex has the index next to the last element of the stack
    let prevStorageIndex = this.getPrevStorageIndex(stackIndex, topIndex);
    
    // shift the elements until the end of the stack is reached
    while (prevStorageIndex !== null) {
      this.storage[nextStorageIndex] = this.storage[prevStorageIndex];
      nextStorageIndex = prevStorageIndex;
      prevStorageIndex = this.getPrevStorageIndex(stackIndex, prevStorageIndex);
    }

    // adjust the topIndex
    this.stackInfo[stackIndex].topIndex = (this.stackInfo[stackIndex].topIndex === this.numStack * this.stackSize - 1) 
                                            ? 0 : this.stackInfo[stackIndex].topIndex + 1;

    //since the elements were shifted, the capacity should be reduced.
    if (!this.isStackFull(stackIndex)) this.stackInfo[stackIndex].capacity--;
  }

  // expands the given stack by shifting the elements of the next stack
  expand = stackIndex => {
    this.shift((stackIndex + 1) % this.numStack);
    this.stackInfo[stackIndex].capacity++; // becuase we shifted next stack, capacity of given stack increased
  }

  allStacksFull = () => {
    for (let i=0; i<this.numStack; i++) {
      if (this.stackInfo[i].count < this.stackInfo[i].capacity) return false;
    }

    return true;
  }

  isStackFull = stackIndex => {
    return this.stackInfo[stackIndex].capacity === this.stackInfo[stackIndex].count;
  }

  push = (stackIndex, value) => {
    if (this.allStacksFull()) return 'all stacks are full';

    // since not all stacks are full and if the given stack is full, then expand it
    if (this.isStackFull(stackIndex)) this.expand(stackIndex);

    // add the item to the topIndex
    this.storage[this.stackInfo[stackIndex].topIndex] = value;

    // update topIndex after taking care of wraparound
    this.stackInfo[stackIndex].topIndex = (this.stackInfo[stackIndex].topIndex === this.numStack * this.stackSize - 1) 
                                            ? 0 : this.stackInfo[stackIndex].topIndex + 1;
    this.stackInfo[stackIndex].count++;
  }

  pop = stackIndex => {
    if (this.stackInfo[stackIndex].count === 0) return 'stack is empty';

    this.stackInfo[stackIndex].topIndex = (this.stackInfo[stackIndex].topIndex === 0) 
                                            ? this.numStack*this.stackSize - 1 
                                            : this.stackInfo[stackIndex].topIndex -1;
    this.stackInfo[stackIndex].capacity++;
    this.stackInfo[stackIndex].count--;

    let value = this.storage[this.stackInfo[stackIndex].topIndex]
    delete this.storage[this.stackInfo[stackIndex].topIndex];

    return value;
  }

  print = () => {
    if (this.allStacksFull()) console.log('all stacks are full');
    return this.storage;
  }  
}

let myThreeInOneStack = new ThreeInOneDynamicStack();
myThreeInOneStack.push(0,10);
myThreeInOneStack.push(0,11);
myThreeInOneStack.push(0,12);
myThreeInOneStack.push(0,13);
myThreeInOneStack.push(1,20);
myThreeInOneStack.push(1,21);
myThreeInOneStack.push(2,30);
myThreeInOneStack.push(2,31);
myThreeInOneStack.push(2,32);
myThreeInOneStack.push(2,33);

console.log(myThreeInOneStack.print());

myThreeInOneStack.push(0,14);
console.log(myThreeInOneStack.print());

myThreeInOneStack.push(2,34);
console.log(myThreeInOneStack.print());

myThreeInOneStack.pop(2);
console.log(myThreeInOneStack.print());