// start the selection sort with index 0
const selectionSort = (inputArray, index=0) => {
  // if we have reached the end, then all the elements are sorted
  if (index === inputArray.length) return true;

  // let us find smallest value starting from the index to the end
  // let us assume that the element in the given index is the smallest
  let minVal = inputArray[index];
  let minIndex = index;

  // loop till the end and find the smallest element
  for (let i=index+1; i<inputArray.length; i++) {
    if (inputArray[i] < minVal) {
      minVal = inputArray[i];
      minIndex = i;
    }
  }

  // if the index of the smallest element is different from the given index, then swap the elements
  if (minIndex !== index) {
    let temp = inputArray[index];
    inputArray[index] = inputArray[minIndex];
    inputArray[minIndex] = temp; 
  }

  // continue the sort starting with the next index
  selectionSort(inputArray, index+1);
  
  return inputArray;
}

let inputArray = [8,5,6,1,2,9,4];
console.log(selectionSort(inputArray));