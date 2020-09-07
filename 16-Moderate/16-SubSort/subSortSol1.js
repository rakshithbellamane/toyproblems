const subSort = arr => {
  let left,right;

  // starting from begining find the index of element where element < prevElement
  // this will be the left starting point of midArr
  for(let i=0;i<arr.length-1;i++) {
    if (arr[i+1] < arr[i]) {
      left = i+1;
      break;
    }
  }

  // starting from end find the index of element where element > prevElement
  for(let i=arr.length-1;i>0;i--) {
    if (arr[i-1] > arr[i]) {
      right = i-1;
      break;
    }
  }

  let rangeFound = false;
  let oldLeft = left;
  let oldRight = right;
  let newLeft = left;
  let newRight = right;

  // keep pushing the left and right bounds until they are the same
  while (!rangeFound) {
    // sort the mid section so that we know lowest and largest elements.
    let sortedMidArr = arr.slice(left,right+1).sort((a,b) => a-b);

    // find the new right if there are elements in right section that are < largest in mid section
    newRight = pushRight(sortedMidArr, arr, right);
    // find the new left if there are elements in left section that are > smallest in mid section
    newLeft = pushLeft(sortedMidArr, arr, left);

    if (newRight === right && newLeft === left) {
      rangeFound = true;
    } else {
      left = newLeft;
      right = newRight;
    }
  }
  

  console.log(`old left: ${oldLeft}, old right: ${oldRight}`);
  console.log(`new left: ${newLeft}, new right: ${newRight}`);

  let newSortedMidArr = arr.slice(newLeft,newRight+1).sort((a,b) => a-b);

  return(arr.slice(0,newLeft)).concat(newSortedMidArr).concat(arr.slice(newRight+1));
}

const pushRight = (sortedMidArr, arr, right) => {
  // get the largest in the mid section
  let midLargest = sortedMidArr[sortedMidArr.length-1];
  // start with the new right as the current right+1
  let newRight = right+1;

  // loop through arr's right section until end or we find element >= midLargest
  while ((arr[newRight] < midLargest) || newRight >= arr.length) newRight++;

  return newRight-1;
}

const pushLeft = (sortedMidArr, arr, left) => {
  // get the smallest in the mid section
  let midSmallest = sortedMidArr[0];
  // start with the new left as the current left-1
  let newLeft = left-1;

  // loop through arr's left section until begining or we find element <= midSmallest
  while ((arr[newLeft] > midSmallest) || newLeft === 0) newLeft--;

  return newLeft+1;
}

let arr = [1,2,4,7,10,11,7,12,6,7,16,18,19];

console.log(subSort(arr));