const findMissingNum = (arr, pos=0, missingNum='') => {
  // vars for keeping count of zeros & ones
  let zeros=0,ones=0;

  // base case. If arr length = 0, return the missingNum
  if (arr.length === 0) return parseInt(missingNum, 2);

  //loop through the array checking the bit in pos
  // based on the bit, put the eles in either zeroArr or oneArr. These will be containing filtered eles.
  let zeroArr = [], oneArr = [];
  for (let i=0; i<arr.length; i++) {
    if ((arr[i] & (1 << pos)) === 0) {
      zeroArr.push(arr[i]);
      zeros++;
    } else {
      oneArr.push(arr[i]);
      ones++;
    }
  }

  // if the count of ones > zeros, then the missing num should be having a 0 in the pos bit. So, we need to use eles in zeroArr. Else, use eles in oneArr

  let result;
  if (ones > zeros) {
    missingNum = '0'+missingNum;
    result = findMissingNum(zeroArr, pos+1, missingNum)
  } else {
    missingNum = '1'+missingNum;
    result = findMissingNum(oneArr, pos+1, missingNum);
  }

  return result;
}

let arr = [0,1,2,3,4,5,6,7];
console.log(findMissingNum(arr));