const radixSort = (arr, radix) => {
  // get the max element of the arr. We need to perform count sort for the number of digits in the max element.
  let max = Math.max(...arr);

  // we will be "count" sorting the arr starting from the first digit and then the 2nd etc...
  // In order to get those digits for any given element in the array, we need to divide the ele by 1, then by 10, then by 100 etc..
  for (let pos=1; Math.trunc(max/pos) > 0; pos=pos*radix) {
    // call the count for each position/digit of the max element.
    countSort(arr,pos,radix);
  }

  return arr;
}

const countSort = (arr, pos, radix) => {
  // create a count(buckets) array based on the radix and fill it with 0.
  let count = new Array(radix).fill(0);

  // for each element in the array, update the count array based on the digit in the "pos" passed in.
  for (let i=0; i<arr.length; i++) {
    count[Math.trunc(arr[i]/pos)%radix]++;
  }

  // update the count array so that we can find out the actual positions each element in the array based on the digit in "pos".
  for (let i=1; i<radix; i++) {
    count[i] += count[i-1];
  }

  // create a temp array to store the sorted array
  let temp = new Array(arr.length);

  // starting from the last element (to maintain the stability of the array),
  // decrement the position in the count array corresponding to the digit
  // place the element in the sorted position in the temp array.
  for (let i=arr.length-1; i>=0; i--) {
    temp[--count[Math.trunc(arr[i]/pos)%radix]] = arr[i];
  }

  for (let i=0; i<temp.length; i++) {
    arr[i] = temp[i];
  }
}

let arr = [101,15,215,6,23,8,199,53];
console.log(radixSort(arr,10));