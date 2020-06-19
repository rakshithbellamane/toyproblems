class ThreeInOneStack {
  storage = [];
  defaultSize = 5;
  stackSize = 0;
  stackInfo = [];
  numStack = 3;

  constructor (size=this.defaultSize) {
    this.stackSize = size;

    // initialize the first stack's index and count
    this.stackInfo[0] = {
      topIndex: 0,
      count: 0,
    };
    
    // initialize the subsequent stack's index and count based on the previous stack's info.
    for (let i=1; i<this.numStack; i++) {
      this.stackInfo[i] = {
        topIndex: this.stackInfo[i-1].topIndex + this.stackSize,
        count: 0,
      };
    }
  }

  push = (stackIndex, value) => {
    let curStackInfo = this.stackInfo[stackIndex];

    if (curStackInfo.count === this.stackSize) return 'stack is full';

    this.storage[curStackInfo.topIndex++] = value;
    curStackInfo.count++;
  }

  pop = stackIndex => {
    let curStackInfo = this.stackInfo[stackIndex];

    if (curStackInfo.count === 0) return 'stack is empty';

    let value = this.storage[curStackInfo.topIndex--];
    curStackInfo.count--;
  }

  stackCount = () => {
    stackCountArr = [];
    for (let i=0; i<this.numStack; i++) {
      stackCountArr.push(this.stackInfo[i].count);
    }

    return stackCountArr.toString(',');
  }

  print = () => {
    let stacks = [];

    for(let i=0; i<this.numStack; i++) {
      for (let j=0; j<this.stackInfo[i].count; j++) {
        stacks.push([i, i > 0 ? this.storage[j + i*this.stackSize] : this.storage[j]]);
      }
    }

    return stacks;
  }
}

let myThreeInOneStack = new ThreeInOneStack();
myThreeInOneStack.push(0,10);
myThreeInOneStack.push(0,11);
myThreeInOneStack.push(0,12);
myThreeInOneStack.push(0,13);
myThreeInOneStack.push(1,20);
myThreeInOneStack.push(1,21);
myThreeInOneStack.push(1,22);
myThreeInOneStack.push(1,23);
myThreeInOneStack.push(2,30);
myThreeInOneStack.push(2,31);
myThreeInOneStack.push(2,32);
myThreeInOneStack.push(2,33);

console.log(myThreeInOneStack.print());

myThreeInOneStack.pop(1);
myThreeInOneStack.pop(1);
console.log(myThreeInOneStack.print());

myThreeInOneStack.push(1,12);
myThreeInOneStack.push(1,13);
myThreeInOneStack.push(1,14);
myThreeInOneStack.push(1,15);
console.log(myThreeInOneStack.print());
