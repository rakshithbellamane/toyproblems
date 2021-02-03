const findSubArrSol1 = (input, target) => {
  let subArr = [];

  for (let i=0; i<input.length; i++) {
    if (input[i] < target) {
      subArr.push([input[i]]);

      let product = input[i];
      let elements = [input[i]];
      for (let j=i+1; j<input.length; j++) {
        if (product * input[j] < target) {
          product *= input[j];
          subArr.push([...elements, input[j]]);
          elements.push(input[j]);
        } else {
          break;
        }
      }
    }
  }

  return subArr;
}

/***************************** */
const findSubArrSol2 = (arr, target) => {
  let result = [],
    product = 1,
    left = 0;
  for (right = 0; right < arr.length; right++) {
    product *= arr[right];
    while ((product >= target && left < arr.length)) {
      product /= arr[left];
      left += 1;
    }
    // since the product of all numbers from left to right is less than the target therefore,
    // all subarrays from left to right will have a product less than the target too; to avoid
    // duplicates, we will start with a subarray containing only arr[right] and then extend it
    const tempList = [];
    for (let i = right; i >= left; i--) {
      tempList.unshift(arr[i]);
      result.push([...tempList]);
    }
  }
  return result;
}

/***************************** */

let input = [2,5,3,10];
let target = 30;
console.log(`sol1: ${findSubArrSol1(input, target)}`);
console.log(`sol2: ${findSubArrSol2(input, target)}`);