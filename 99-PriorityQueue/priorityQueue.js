class PriorityQueue {
  elements = [];

  reHeapifyUp (index) {
    let parentIndex = Math.ceil((index - 2)/2);

    if (parentIndex < 0) return;

    if (this.elements[index].priority < this.elements[parentIndex].priority) {
      let temp = this.elements[index];
      this.elements[index] = this.elements[parentIndex];
      this.elements[parentIndex] = temp;

      this.reHeapifyUp(parentIndex);
    }
  }

  reHeapifyDown (index) {
    let childIndex=index;
    if (2*index+1 < this.elements.length && this.elements[index].priority > this.elements[2*index+1].priority) childIndex = 2*index+1;
    if (2*index+2 < this.elements.length && this.elements[childIndex].priority > this.elements[2*index+2].priority) childIndex = 2*index+2;

    if (childIndex !== index)
    {
      let temp = this.elements[index];
      this.elements[index] = this.elements[childIndex];
      this.elements[childIndex] = temp;

      this.reHeapifyDown(childIndex);
    }
  }

  insert (ele) {
    this.elements.push(ele);
    this.reHeapifyUp(this.elements.length-1);
  }

  poll () {
    let minEle = this.elements[0];
    this.elements[0] = this.elements.pop();
    this.reHeapifyDown(0);

    return minEle;
  }

  remove (val) {
    let index = this.elements.findIndex(ele => ele.data === val);

    if (index !== -1) {
      this.elements[index] = this.elements.pop();
      let parentIndex = Math.ceil((index-2)/2);

      if (parentIndex >= 0 && this.elements[parentIndex].priority > this.elements[index].priority) this.reHeapifyUp(index);

      if ((2*index+1 < this.elements.length && this.elements[index].priority > this.elements[2*index+1].priority) || 
          (2*index+2 < this.elements.length && this.elements[index].priority > this.elements[2*index+2].priority)) this.reHeapifyDown(index);
    }
  }
}

let pq = new PriorityQueue();
pq.insert({data: 'a', priority: 5});
pq.insert({data: 'b', priority: 7});
pq.insert({data: 'c', priority: 1});
pq.insert({data: 'd', priority: 3});
pq.insert({data: 'e', priority: 2});
pq.insert({data: 'f', priority: 8});
pq.insert({data: 'g', priority: 4});
pq.insert({data: 'h', priority: 6});
pq.insert({data: 'i', priority: 9});

console.log(pq.elements);
console.log(pq.poll());
console.log(pq.elements);
pq.remove('d');
console.log(pq.elements);
pq.remove('h');
console.log(pq.elements);