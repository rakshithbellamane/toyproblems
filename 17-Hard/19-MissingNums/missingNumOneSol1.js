// find one missing num
const findMissingNum = (list, N) => {
  let listSum = list.reduce((total, num) => total+num );
  let correctSum = N*(N+1)/2;

  return correctSum-listSum;
}

let list = [1,2,3,4,6,7,8,9,10];
console.log(findMissingNum(list,10));