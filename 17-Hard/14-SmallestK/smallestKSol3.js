const findSmallestK = (arr, k) => {
  let treshold = findRank(arr, k-1);
  let smallest = [];
  
  arr.forEach(ele => {
    if (ele <= treshold) smallest.push(ele);
  });

  return smallest;
}

// rank is essentially which index ele we need
const findRank = (arr, rank, left=0, right=arr.length-1) => {
  // pick a random ele as the pivot
  let pivot = arr[getRandomIntInRange(left, right)];

  // partition the array around the pivot such the all eles < pivot are on left and > pivot are on right
  let leftEnd = partition(arr, left, right, pivot);
  // determine the num eles in the left arr
  let leftSize = leftEnd - left + 1;

  // if the left arr is same size as the rank, then we find the max ele and return
  if (rank === leftSize - 1) return max(arr, left, leftEnd);
  // if left arr has > eles than rank, then we continue processing left arr
  else if (rank < leftSize) return findRank(arr, rank, left, leftEnd);
  // if left arr has < eles than rank, then the ele corresponding to the rank must be in right arr. So we process right arr.
  // We need to readjust the rank because the right arr #left array eles less
  else return findRank(arr, rank-leftSize, leftEnd+1, right);
}

const getRandomIntInRange = (min, max) => {
  let minInt = Math.ceil(min);
  let maxInt = Math.floor(max);

  return Math.floor(Math.random() * (maxInt-minInt) + minInt);
}

const partition = (arr, left, right, pivot) => {
  // // loop until we have touched all the eles
  while (left <= right) {
    // if the ele on left is > pivot, swap. We only decrement right because we only know for sure that the ele we put in right > pivot.
    // We are not sure about the ele that we swapped into left.
    if (arr[left] > pivot) {
      swap(arr, left, right);
      right--;
    // if ele on right >= pivot, swap
    } else if (arr[right] <= pivot) {
      swap(arr, left, right);
      left++;
    } else {
      left++;
      right--;
    }
  }

  // leftmost end of the left part is left-1
  return left - 1;
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

const arr = [7,9,5,3,0,8,6,4,1,15,2,22];
console.log(findSmallestK(arr, 2));