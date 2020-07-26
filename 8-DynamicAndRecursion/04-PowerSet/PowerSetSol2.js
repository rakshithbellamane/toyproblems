const getAllSubSets = (set, allSubSets=[]) => {
  // total number of all subsets is 2ⁿ 
  let numSets = Math.pow(2,set.length);
  
  //loop through all the numbers from 0 to numSets to determine if a bit is on or off in that number 
  // and then include the corresponding element from the input set into the subSet.
  for (let i=0; i< numSets; i++) {
    let subSet = [];
    for (let j=0; j<set.length; j++) {
      let setIndex = set.length - 1 - j;
      if ((i >> j) & 1) {
        subSet.push(set[setIndex]);
      }
    }
    allSubSets.push(subSet);
  }

  return allSubSets;
}

const set = [1,2,3,4];
console.log(getAllSubSets(set));