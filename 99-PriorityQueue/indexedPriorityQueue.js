class IndexedPriorityQueue {
  elements = [];
  indexMap = {};

  swap (parentIndex, childIndex) {
    let parent = this.elements[parentIndex];
    let child = this.elements[childIndex];

    // adjust the index map

    // get the list of indices of the parent and child from the map
    let parentList = this.indexMap[parent.data];
    let childList = this.indexMap[child.data];
    // remove the parentIndex and childIndex from the indices list since they will need to be updated
    parentList.splice(parentList.indexOf(parentIndex), 1);
    childList.splice(childList.indexOf(childIndex), 1);
    // update the parentList & childList by swapping the indices
    parentList.push(childIndex);
    childList.push(parentIndex);

    // adjust the elements array
    let temp = this.elements[parentIndex];
    this.elements[parentIndex] = this.elements[childIndex];
    this.elements[childIndex] = temp;
  }

  reHeapifyUp (childIndex) {
    let parentIndex = Math.ceil((childIndex-2)/2);
    
    if (parentIndex < 0) return;

    if (this.elements[parentIndex].priority > this.elements[childIndex].priority) {
      this.swap(parentIndex, childIndex);
      this.reHeapifyUp(parentIndex);
    }
  }

  reHeapifyDown (parentIndex) {
    let childIndex=parentIndex;

    if ((2*parentIndex+1 < this.elements.length && this.elements[parentIndex].priority > this.elements[2*parentIndex+1].priority)) childIndex = 2*parentIndex+1;
    if ((2*parentIndex+2 < this.elements.length && this.elements[childIndex].priority > this.elements[2*parentIndex+2].priority)) childIndex = 2*parentIndex+2;

    if (childIndex !== parentIndex) {
      this.swap(parentIndex, childIndex);

      this.reHeapifyDown(childIndex);
    }
  }

  insert (ele) {
    this.elements.push(ele);
    
    // update the indexMap
    // if data exists, then add the index to list of indices
    if (this.indexMap[ele.data]) this.indexMap[ele.data].push(this.elements.length-1);
    // if data does not exists, then add the index to a new list of indices
    else this.indexMap[ele.data] = [this.elements.length-1];

    this.reHeapifyUp(this.elements.length-1);
  }

  poll () {
    let eleRemoved = this.elements[0];
    if (this.elements.length > 1) {
      this.elements[0] = this.elements.pop();

      // update the indexMap
      // step1: remove 0 from the index list of the eleRemoved
      let eleRemovedList = this.indexMap[eleRemoved.data];
      eleRemovedList.splice(eleRemovedList.indexOf(0),1);
      // step2: update the index of last ele that is now the first ele
      let firstEleList = this.indexMap[this.elements[0].data];
      firstEleList.splice(firstEleList.indexOf(this.elements.length),1);
      firstEleList.push(0);
  
      this.reHeapifyDown(0);
    } else {
      this.elements.pop();
      this.indexMap[eleRemoved.data] = [];
    }

    return eleRemoved;
  }

  remove (val) {
    // find the index of the val to be removed;
    let indexList = this.indexMap[val];
    let index = indexList[0];
    // get the last ele in the heap
    let lastEle = this.elements[this.elements.length-1];

    // adjust the elements

    // swap the val with the last ele in the heap
    this.elements[index] = lastEle;
    // pop the last ele and get rid of val
    this.elements.pop();

    // adjust the map

    // since the val is no longer in the index, remove it from indexList
    indexList.shift();
    // the last ele moved into the index. So we need to update the map of the last ele to the index
    // get the list of indices of the last ele
    let lastEleList = this.indexMap[lastEle.data];
    // remove the old location and update it with new location
    lastEleList.splice(lastEleList.indexOf(this.elements.length));
    lastEleList.push(index);

    // we need to heapify up or down
    // first heapifyUp and see if that works
    this.reHeapifyUp(index);
    // check to see if the index of lastEle has not changed, then we need to heapify down
    if (this.elements[index] === lastEle) this.reHeapifyDown(index);
  }
  
  update (val, newPriority) {
    let indexList = this.indexMap[val];
    let index = indexList[0];
    let ele = this.elements[index];

    // update the priority of the val
    this.elements[index].priority = newPriority;
    
    // try heapifying up
    this.reHeapifyUp(index);
    // if heapifyUp did not happen, then heapify down
    if (this.elements[index] === ele) this.reHeapifyDown(index);
  }

  contains (val) {
    return this.indexMap[val];
  }

  decreasePriority (val, newPriority) {
    let index = this.indexMap[val][0];
    if (this.elements[index].priority > newPriority) this.update(val, newPriority);
  }
}

module.exports = IndexedPriorityQueue;
// let pq = new IndexedPriorityQueue();
// pq.insert({data: 'a', priority: 5});
// pq.insert({data: 'b', priority: 7});
// pq.insert({data: 'c', priority: 1});
// pq.insert({data: 'd', priority: 3});
// pq.insert({data: 'e', priority: 2});
// pq.insert({data: 'f', priority: 8});
// pq.insert({data: 'g', priority: 4});
// pq.insert({data: 'h', priority: 6});
// pq.insert({data: 'i', priority: 9});

// console.log(pq.elements);
// console.log(pq.poll());
// console.log(pq.elements);
// pq.remove('d');
// console.log(pq.elements);
// pq.remove('h');
// console.log(pq.elements);
// pq.update('i', 1);
// console.log(pq.elements);
// pq.update('e', 9);
// console.log(pq.elements);