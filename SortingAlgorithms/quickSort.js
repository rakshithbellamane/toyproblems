// https://www.youtube.com/watch?v=SLauY6PpjW4

// function to partition the arr into left and right
const partition = (arr, left, right) => {
  // let us pick the pivot as the middle ele of the arr
  let pivotLoc = Math.round((left+right)/2);
  let pivot = arr[pivotLoc];

  // loop until we have touched each ele
  while (left < right) {
    // find the ele in the left that is > pivot
    while (arr[left] < pivot) left++;
    // find the ele in the right that is < pivot
    while (arr[right] > pivot) right--;
    // if we haven't processed all the eles, swap the left and right eles
    if (left < right) {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
  }

  // return left which is the first ele of right
  return left;
}

const quickSort = (arr, left, right) => {
  // partition the arr such that we get two parts where eles in left < eles in right
  let index = partition(arr, left, right);

  // quick sort left arr
  if (left < index-1) quickSort(arr, left, index-1);
  // quick sort right arr
  if (index < right) quickSort(arr, index, right);

  return arr;
}

let inputArray = [8,5,6,1,2,9,4];
console.log(quickSort(inputArray, 0, inputArray.length-1));