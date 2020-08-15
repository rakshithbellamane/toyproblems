const binarySearch = (sortedArr, num, start=0, end=sortedArr.length-1) => {
  if (start > end) return null;
  let mid = Math.trunc((start+end)/2);

  let result = null;
  if (num < sortedArr[mid]) {
    result = binarySearch(sortedArr, num, start, mid-1);
  } else if (num > sortedArr[mid]) {
    result = binarySearch(sortedArr, num, mid+1, end);
  } else {
    result = mid;
  }

  return result;
}

let sortedArr = [1,3,4,5,6,7,8];
console.log(binarySearch(sortedArr,7))