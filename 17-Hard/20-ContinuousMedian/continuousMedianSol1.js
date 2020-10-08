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

// function to add a new number either to minHeap or maxHeap
// The two heaps will store two halfs of the given array of numbers such that. This will ensure that the top (max or min) of the heaps are middles.
// maxHeap will have numbers <= middle and minHeap will have numbers >= middle
const addNewNumber = (minHeap, maxHeap, num) => {
  // if both heaps are of same size
  if (minHeap.size() === maxHeap.size()) {
    // given number belongs to the minHeap
    if (minHeap.peek() !== null && num > minHeap.peek()) {
      // we will take the min from minHeap and put it to maxHeap
      maxHeap.insert(minHeap.remove());
      // put the new num into minHeap
      minHeap.insert(num);
    } 
    // given number belongs to maxHeap. We will just insert into maxHeap.
    else maxHeap.insert(num);
  } 
  // we have more eles in maxHeap
  else {
    // and the num belongs to maxHeap
    if (num < maxHeap.peek()) {
      // take the max from maxHeap and put into minHeap
      minHeap.insert(maxHeap.remove());
      // insert the new num into maxHeap
      maxHeap.insert(num);
    } 
    // given number belongs to minHeap
    else minHeap.insert(num);
  }
}

// function to find the median (the middle number)
const getMedian = (minHeap, maxHeap) => {
  if (maxHeap.isEmpty()) return 0;
  // if both heaps are of same size, then the median is the average
  if (maxHeap.size() === minHeap.size()) return ((maxHeap.peek()+minHeap.peek())/2);
  // since we ensure maxHeap has more eles than minHeap, if the sizes are different, then the median is the top of maxHeap
  else return maxHeap.peek();
}

let minHeap = new Heap('min');
let maxHeap = new Heap('max');
let arr = [9,3,5,1,8,16,8,7,6,10];
arr.forEach(num => addNewNumber(minHeap, maxHeap, num));
console.log(getMedian(minHeap,maxHeap));