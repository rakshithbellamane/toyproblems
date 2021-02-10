const findFreeHrs = hrs => {
  let allHrs = [];

  for(let i=0; i<hrs.length; i++) {
    for (let j=0; j<hrs[i].length; j++) {
      allHrs.push(hrs[i][j]);
    }
  }

  let sortedHrs = allHrs.sort((a,b) => a[0]-b[0]);

  let freeHrs = [];
  for (let i=1; i<sortedHrs.length; i++) {
    if (sortedHrs[i][0] > sortedHrs[i-1][1])
      freeHrs.push([sortedHrs[i-1][1], sortedHrs[i][0]]);
  }

  return freeHrs;
}

const hrs = [[[1,3], [9,12]], [[2,4]], [[6,8]]];
console.log(findFreeHrs(hrs));