const findLargestSeq = arr => {
  let numLetter = 0,numNum=0;
  let diffMap = {};
  let max=0;
  let maxStart=0,maxEnd=0;

  // loop through the array and at each index, find the diff between letters and nums
  for (let i=0; i<arr.length; i++) {
    if (typeof arr[i] === 'number') numNum++;
    else numLetter++;

    // check if we already have the same diff between nums & letters in map
    let diff = Math.abs(numLetter-numNum);
    if (diffMap[diff] !== undefined) {
      // get the sub array length
      let subArrLen = i - diffMap[diff];
      // if the subArrLen > max, then make this the max and store the indexes
      if (subArrLen > max) {
        max = subArrLen;
        maxStart = diffMap[diff]+1;
        maxEnd = i;
      }
    } else 
    // store the index corresponding to that diff
    diffMap[diff] = i;
  }

  console.log(`maxStart: ${maxStart} maxEnd: ${maxEnd}`);
}

const arr = ['a','b',1,'c',2,'d','e',3,4,'f','g'];
findLargestSeq(arr);