// this Heap datastructure is a tweak to the regular Heap datastructure and can be either a min or max heap.
class Heap {
  storage = [];
  // indicates what type of heap this is.
  heapType;

  // constructor sets the heap type during declaration.
  constructor (type) {
    this.heapType = type;
  }

  // function to reheapify the heap by moving up
  reheapifyUp (index) {
    let parentIndex = Math.ceil((index - 2)/2);
    if (parentIndex < 0) return;
    else if (this.heapType === 'min' && this.storage[parentIndex] < this.storage[index]) return
    else if (this.heapType === 'max' && this.storage[parentIndex] > this.storage[index]) return
    else {
      let temp = this.storage[parentIndex];
      this.storage[parentIndex] = this.storage[index];
      this.storage[index] = temp;

      this.reheapifyUp(parentIndex);
    }
  }

  // function to reheapify the heap by moving down
  reheapifyDown = index => {
    let childIndex = index;

    // in a heap, the children of a given index n will be in 2n+1 and 2n+2
    if ((2*index+1) < this.storage.length) {
      if (this.heapType === 'min' && this.storage[2*index+1] < this.storage[index]) childIndex = 2*index+1;
      else if (this.heapType === 'max' && this.storage[2*index+1] > this.storage[index]) childIndex = 2*index+1;
    }

    if ((2*index+2) < this.storage.length) {
      if (this.heapType === 'min' && this.storage[2*index+2] < this.storage[childIndex]) childIndex = 2*index+2;
      else if (this.heapType === 'max' && this.storage[2*index+2] > this.storage[childIndex]) childIndex = 2*index+2;
    }

    if (childIndex !== index) {
      let temp = this.storage[index];
      this.storage[index] = this.storage[childIndex];
      this.storage[childIndex] = temp;

      this.reheapifyDown(childIndex);
    }
  }

  // function to insert a value into heap.
  insert (val) {
    // push the val into las position of the storage. We will put it in right place by reheapifying.
    this.storage.push(val);

    // reheapify starting with the last position where the new val was pushed
    this.reheapifyUp(this.storage.length-1);
  }

  // function to find the top (min or max) ele
  peek () {
    return this.storage[0];
  }

  // function to find the size of heap
  size () {
    return this.storage.length;
  }

  // function to remove min or max
  remove () {
    if (this.storage.length === 0) return null;
    if (this.storage.length === 1) return this.storage.pop();

    let minOrMaxValue = this.storage[0];
    // we will put the last child at the top and reheapify down
    this.storage[0] = this.storage.pop();

    this.reheapifyDown(0);

    return minOrMaxValue;
  }

  isEmpty() {
    return this.storage.length === 0;
  }
}

let minHeap = new Heap('min');
let maxHeap = new Heap('max');
// let arr = [9,3,5,1,8,16,8,7,6,10];
let arr = [5,7,1,3,2,8,4,6,9];

arr.forEach(num => minHeap.insert(num));
console.log(`minHeap initial storage: ${minHeap.storage}`);
minHeap.remove();
console.log(`minHeap storage after remove: ${minHeap.storage}`);
minHeap.remove();
console.log(`minHeap storage after remove: ${minHeap.storage}`);

arr.forEach(num => maxHeap.insert(num));
console.log(`maxHeap initial storage: ${maxHeap.storage}`);
maxHeap.remove();
console.log(`maxHeap storage after remove: ${maxHeap.storage}`);
maxHeap.remove();
console.log(`maxHeap storage after remove: ${maxHeap.storage}`);