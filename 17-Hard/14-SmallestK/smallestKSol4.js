const findSmallestK = (arr, k) => {
  let treshold = findRank(arr, k-1);
  let smallest = [];
  
  arr.forEach(ele => {
    if (ele < treshold) smallest.push(ele);
  });

  // if num eles in smallest < k, then it must be missing the eles = treshold. So, we need to copy it
  while (smallest.length < k) smallest.push(treshold); 

  return smallest;
}

// rank is essentially which index ele we need
const findRank = (arr, rank, start=0, end=arr.length-1) => {
  // pick a random ele as the pivot
  let pivot = arr[getRandomIntInRange(start, end)];

  // partition the array around the pivot such the all eles < pivot are on left, eles = pivot will be in middle and > pivot are on right
  let partitionSize = partition(arr, start, end, pivot);
  // determine the num eles in the left and middle arr
  let leftSize = partitionSize.leftSize;
  let middleSize = partitionSize.middleSize;

  if (rank < leftSize) return findRank(arr, rank, start, start+leftSize-1);
  else if (rank < leftSize+middleSize) return pivot;
  else return findRank(arr, rank-leftSize-middleSize, start+leftSize+middleSize, end);
}

const getRandomIntInRange = (min, max) => {
  let minInt = Math.ceil(min);
  let maxInt = Math.floor(max);

  return Math.floor(Math.random() * (maxInt-minInt) + minInt);
}

const partition = (arr, start, end, pivot) => {
  let left = start;
  let middle = start;
  let right = end;

  // // loop until we have touched all the eles
  while (middle <= right) {
    if (arr[middle] < pivot) {
      swap(arr, middle, left);
      middle++;
      left++;
    } else if (arr[middle] > pivot) {
      swap(arr, middle, right);
      right--;
    } else {
      middle++;
    }
  }

  return {leftSize: left-start, middleSize: right-left+1};
}

const swap = (arr, left, right) => {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
}

const max = (arr, left, right) => {
  let maxVal = arr[left];
  for (let i=left+1; i<=right; i++) {
    maxVal = Math.max(arr[i], maxVal);
  }

  return maxVal;
}

const arr = [7,9,5,3,2,8,6,2,1,15,2,22];
console.log(findSmallestK(arr, 5));