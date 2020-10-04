class MinHeap {
  storage = [];

  insert (value) {
    this.storage.push(value);

    const reheapify = index => {
      let parentIndex = Math.ceil((index - 2)/2);
  
      if (parentIndex < 0 || this.storage[parentIndex].val < this.storage[index].val) return;
  
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

    let minValue = this.storage[0].val;

    this.storage[0] = this.storage.pop();

    const reheapify = index => {
      let minIndex = index;

      if ((2*index + 1) < this.storage.length && this.storage[2*index + 1].val < this.storage[index].val) 
        minIndex = 2*index+1;
      
      if ((2*index + 2) < this.storage.length && this.storage[2*index + 2].val < this.storage[minIndex].val) 
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

const findShortSeq = (small, big) => {
  // locations is an map of each ele in small to a list of all the pos that ele appears in big
  let locations = getLocations(small,big);

  return getShortestClosure(locations);
}

// get the pos of each ele in small in the big arr
const getLocations = (small, big) => {
  let locations = {};
  for (let i=0; i<small.length; i++) {
    let posList = [];
    big.forEach((ele,index) => {if (ele === small[i]) posList.push(index)});
    locations[small[i]] = [...posList];
  }

  return locations;
}

// to get the shortest subarr (or closure), we will use a minHeap
const getShortestClosure = (locations) => {
  // define a minHeap. This will store the head(smallest pos) of each small ele's list and the reference to the small ele
  let minEleHeap = new MinHeap();
  let max = Number.NEGATIVE_INFINITY;

  // populate the minHead with the first item from each small ele's posList
  for (ele in locations) {
    minEleHeap.insert({listId: ele, val: locations[ele][0]});
    // while doing, calculate the max. We won't calculate min because it is the first val in minHeap. 
    max = Math.max(locations[ele][0], max);
  }

  // assign min from the minHeap
  let min = minEleHeap.storage[0].val;
  // starting assignment to bestMin and bestMax
  let bestMin = min;
  let bestMax = max;

  // loop until one of the location list is empty
  while(true) {
    // get the reference to the small ele
    let ele = minEleHeap.storage[0].listId;
    // get the min val
    min = minEleHeap.storage[0].val;
    // get the location list corresponding to the min val
    let minLocations = locations[ele];

    // remove the minVal from the heap. After this a new min will be at the top of the heap.
    minEleHeap.removeMin();

    // update bestMin & bestMax if the new subarr is smaller
    if ((max - min) < (bestMax - bestMin)) {
      bestMax = max;
      bestMin = min;
    }

    // if after removing the min from locations list, if the list is empty, break;
    if (minLocations.length === 0) break;

    // if there are pos in the list, shift the first pos out of the list.
    let headFromList = minLocations.shift();
    // insert into the heap. It will be put into the right location in the heap.
    minEleHeap.insert({listId: ele, val: headFromList});
    // update the max comparing it to the head we just got
    max = Math.max(max, headFromList);
  }

  return {bestMin, bestMax};
}

const small = [1,5,9];
const big = [7,5,9,0,2,1,3,5,7,9,1,1,5,8,8,9,7];
console.log(findShortSeq(small,big));