const findSumPairs = (arr, sum) => {
  let pairs = [];
  let complementMap = {};

  for (let i=0; i<arr.length; i++) {
    let comp = sum - arr[i];
    if (complementMap[arr[i]]) pairs.push({ele1: comp, ele2: arr[i]});
    complementMap[comp] = arr[i];
  }

  return pairs;
}

let arr1 = [3,10,5,1,-1,2,0,6,9,4];

console.log(findSumPairs(arr1, 9))