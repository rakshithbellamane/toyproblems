const findLongestSeq = arr => {
  // sort the input arr based on height
  let sortArr = arr.sort((p1,p2) => p1.height-p2.height);
  
  let solutions = [], bestSeq = [];

  // loop through each person in the sorted array and see what is the longest seq that can be formed with that person at the end
  for(let i=0; i<sortArr.length; i++) {
    // get the longest seq for the person
    let longestAtIndex = bestSeqAtIndex(sortArr, solutions, i);
    // add it to the list of solutions
    solutions.push(longestAtIndex);
    // compare it to the current bestSeq and make it the bestSeq if its length is longer than the current bestSeq
    if (longestAtIndex.length > bestSeq.length) bestSeq = longestAtIndex;
  }

  return bestSeq;
}

const bestSeqAtIndex = (arr, solutions, index) => {
  // get the person whom we are trying to figure out the longest seq that he can be appended to
  let personAtIndex = arr[index];
  let bestSeq;
  let bestSeqIndex = null;

  // loop through each of the solutions and check if the personAtIndex can be appended to that solution
  for (let i=0; i<index; i++) {
    // get the last person in the sequence i and see if the height and weight is less than given person's height and weight.
    let solLen = solutions[i].length;
    let lastPersonAtI = solutions[i][solLen-1];

    // if last person in the current solution is < given person, then we can append the given person to the current solution
    if (lastPersonAtI.weight < personAtIndex.weight && lastPersonAtI.height < personAtIndex.height) {
      // if the length of the new solution is > current bestSeq or this is the first best seq, then make the new solution the current bestSeq
      if (bestSeqIndex === null || solLen > solutions[bestSeqIndex].length) bestSeqIndex = i;
    }
  }

  // finally, create the longest seq for the index
  bestSeq = bestSeqIndex !== null ? [...solutions[bestSeqIndex]] : [];
  bestSeq.push(arr[index]);

  return bestSeq;
}

// class to store the height and weight of each person in the circus
class HtWt {
  height;
  weight;

  constructor (ht, wt) {
    this.height = ht;
    this.weight = wt;
  }
}

let arr = [];

arr.push(new HtWt(10,50));
arr.push(new HtWt(30,100));
arr.push(new HtWt(20,150));
arr.push(new HtWt(5,50));
arr.push(new HtWt(25,75));
arr.push(new HtWt(10,75));
arr.push(new HtWt(40,175));
arr.push(new HtWt(15,120));
arr.push(new HtWt(35,150));


console.log(findLongestSeq(arr));