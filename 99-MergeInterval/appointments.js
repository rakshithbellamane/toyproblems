const schedulingConflict = apts => {
  let sortedApts = apts.sort((a,b) => (a[0]-b[0]));

  for (let i=1; i<sortedApts.length; i++) {
    if (sortedApts[i][0] <= sortedApts[i-1][1]) return false;
  }

  return true;
}
const apts = [[4,5], [2,3], [3,6]];
console.log(schedulingConflict(apts));