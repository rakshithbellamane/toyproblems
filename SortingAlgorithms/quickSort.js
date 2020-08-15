const partition = (arr, left, right) => {
  let pivotLoc = Math.round((left+right)/2);
  let pivot = arr[pivotLoc];

  while (left < right) {
    while (arr[left] < pivot) left++;
    while (arr[right] > pivot) right--;
    if (left < right) {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
  }
  return left;
}

const quickSort = (arr, left, right) => {
  let index = partition(arr, left, right);

  if (left < index-1) quickSort(arr, left, index-1);
  if (index < right) quickSort(arr, index, right);

  return arr;
}

let inputArray = [8,5,6,1,2,9,4];
console.log(quickSort(inputArray, 0, inputArray.length-1));