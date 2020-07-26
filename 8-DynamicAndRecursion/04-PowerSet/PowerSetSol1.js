const getAllSubSets = (set, allSubSets=[], index) => {
  // this is the base case when you have reached past the end of set.
  if (index === set.length) {
    // push an empty array
    allSubSets.push([]);
    return allSubSets;
  }

  // recurse until you go past the last element
  getAllSubSets(set, allSubSets, index+1);

  // since we don't want to mess up the allSubSets array, create a temporary array that will hold all the subsets in allSubSets
  // but with the additional index element
  subSetsWithIndex = [];
  allSubSets.forEach(subSet => {
    // again create a temporary array for the subsets since we don't want to mess with the subsets within allSubSets
    let tempSet = [...subSet];
    // push the element at the index into each subset
    tempSet.push(set[index]);
    // push the new subset 
    subSetsWithIndex.push(tempSet);
  });
  // finally push all the new subsets with the index into the allSubSets array
  allSubSets.push(...subSetsWithIndex);
  return allSubSets;
}

const set = [1,2,3,4];
console.log(getAllSubSets(set, [], 0));