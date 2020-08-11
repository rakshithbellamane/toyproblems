const bubbleSort = inputArray => {
  let end = inputArray.length;

  // loop through the array such that in each pass we bubble up the largest element to the end
  while (end >= 0) {
    // find the largest element between 0 and end
    for (let i=0; i<end; i++) {
      // if the current element is > next element, then swap the two
      if (inputArray[i] > inputArray[i+1]) {
        let temp = inputArray[i];
        inputArray[i] = inputArray[i+1];
        inputArray[i+1] = temp;
      }
    }
    // we have the largest element in the end. So decrement the end and find (bubble up) the next largest
    end--;
  }

  return inputArray;
}


let inputArray = [8,5,6,1,2,9,4];
console.log(bubbleSort(inputArray));