const findSumPairs = (arr, sum) => {
  let pairs = [];
  sortArr = arr.sort((a,b) => a-b);

  let i=0,j=arr1.length-1;

  while (i <= j) {
    let ele1 = sortArr[i];
    let ele2 = sortArr[j];
    
    if (ele1+ele2 === sum) {
      pairs.push({ele1,ele2});
      i++;
      j--;
    } else if (ele1+ele2 < sum) i++;
    else j--;
  }

  return pairs;
}

let arr1 = [3,10,5,1,-1,2,0,6,9,4];

console.log(findSumPairs(arr1, 9))