const findLargestSeq = (arr) => {
  let maxStart=0,maxEnd=0;
  let max=0;

  // loop through each subarray and count the num of letters and numbers
  for (let i=0; i<arr.length; i++) {
    let numLetter=0,numNum=0;
    for (let j=i; j<arr.length; j++) {
      // increment the num or letter counter based on the type of ele
      if (typeof arr[j] === 'number') numNum++;
      else numLetter++;

      // if numNum = numLetter and count > max, store the index and update the max
      if (numLetter === numNum && numNum > max) {
        max = numNum;
        maxStart=i;
        maxEnd=j;
      }
    }
  }

  console.log(`maxStart: ${maxStart} maxEnd: ${maxEnd}`);
}

const arr = ['a','b',1,'c',2,'d','e',3,4,'f','g'];
findLargestSeq(arr);