const searchRotatedArray = (arr, num, start=0, end=arr.length-1) => {
  let mid = Math.trunc((start+end)/2);

  if (arr[mid] === num) return mid;
  // we need to find which side of the array is sorted
  // if start < mid, then the left side is sorted
  if (arr[start] < arr[mid]) {
    // if num < mid and num >= start, then search left side
    if (num < arr[mid] && num >= arr[start]) {
      return searchRotatedArray(arr, num, start, mid-1);
    } else {
      return searchRotatedArray(arr, num, mid+1, end);
    }
  // if start > mid, then the right side is sorted
  } else if (arr[start] > arr[mid]) {
    // if num > mid, then search right side
    if (num > arr[mid] && num <= arr[end]) {
      return searchRotatedArray(arr, num, mid+1, end);
    } else {
      return searchRotatedArray(arr, num, start, mid-1);
    }
  // if start = mid, then search the right side
  } else {
    return searchRotatedArray(arr, num, mid+1, end);
  }
}

let arr = [15,16,19,20,25,1,3,4,5,7,10,14];
console.log(searchRotatedArray(arr,5));