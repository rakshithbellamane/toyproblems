const findFreeHrs = hrs => {
  let allHrs = [];

  for(let i=0; i<hrs.length; i++) {
    for (let j=0; j<hrs[i].length; j++) {
      allHrs.push(hrs[i][j]);
    }
  }

  let sortedHrs = allHrs.sort((a,b) => a[0]-b[0]);

  let freeHrs = [];
  prev = sortedHrs[0];
  for (let i=1; i<sortedHrs.length; i++) {
    let cur = sortedHrs[i];
    if (cur[0] > prev[1])
      freeHrs.push([sortedHrs[i-1][1], sortedHrs[i][0]]);

    if (prev[1] < cur[1])
      prev = cur;
  }

  return freeHrs;
}

const hrs = [[[1,7], [9,12]], [[2,4]], [[6,8]]];
console.log(findFreeHrs(hrs));