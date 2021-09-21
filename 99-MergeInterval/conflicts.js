const findConflicts = apts => {
  let conflicts = [];
  let sortedApts = apts.sort((a,b) => (a[0]-b[0]));

  let prev = sortedApts[0];
  for (let i=1; i<sortedApts.length; i++) {
    let cur = sortedApts[i];
    if (cur[0] < prev[1])
      conflicts.push([prev, cur]);

    if (cur[1] > prev[1])
        prev = cur;
  }

  return conflicts;
}

const apts = [[4,5], [2,3], [3,6], [5,7], [7,8]];
console.log(findConflicts(apts));