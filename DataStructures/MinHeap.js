class MinHeap {
  storage = [];

  constructor (value) {
    this.storage.push(value);
  }

  insert (value) {
    this.storage.push(value);

    const reheapify = index => {
      let parentIndex = Math.ceil((index - 2)/2);
  
      if (parentIndex < 0 || this.storage[parentIndex] < this.storage[index]) return;
  
      let temp = this.storage[parentIndex];
      this.storage[parentIndex] = this.storage[index];
      this.storage[index] = temp;
  
      reheapify(parentIndex);
    }

    reheapify(this.storage.length - 1);
  }

  removeMin () {
    if (this.storage.length === 0) return null;
    if (this.storage.length === 1) return this.storage.pop();

    let minValue = this.storage[0];

    this.storage[0] = this.storage.pop();

    const reheapify = index => {
      let minIndex = index;

      if ((2*index + 1) < this.storage.length && this.storage[2*index + 1] < this.storage[index]) 
        minIndex = 2*index+1;
      
      if ((2*index + 2) < this.storage.length && this.storage[2*index + 2] < this.storage[minIndex]) 
        minIndex = 2*index+2;

      if (minIndex !== index) {
        let temp = this.storage[index];
        this.storage[index] = this.storage[minIndex];
        this.storage[minIndex] = temp;

        reheapify(minIndex);
      }
    }

    reheapify(0);
  }
}

let myMinHeap = new MinHeap(5);
myMinHeap.insert(6);
myMinHeap.insert(7);
myMinHeap.insert(4);
myMinHeap.insert(8);
myMinHeap.insert(9);

console.log(myMinHeap.storage);

myMinHeap.removeMin();

console.log(myMinHeap.storage);

