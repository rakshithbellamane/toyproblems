/********************** */
const findNumWaysSol1 = (total, steps) => {
  if (total === 0) return 1;

  if (steps.length === 0) return 0;

  let count = 0;
  for (let i=0; i<steps.length; i++) {
    if (total>=steps[i]) {
      count += findNumWaysSol1(total-steps[i], steps);
    }
  }

  return count;
}
/********************** */
const findNumWaysSol2 = (total, steps, dp=[]) => {
  if (total === 0) return 1;

  if (steps.length === 0) return 0;

  if (dp[total]) return dp[total];

  let count = 0;
  for (let i=0; i<steps.length; i++) {
    if (total>=steps[i]) {
      count += findNumWaysSol1(total-steps[i], steps);
    }
  }

  dp[total] = count;

  return dp[total];
}

/********************** */
const findNumWaysSol3 = (total, steps) => {
  let dp = [];

  dp[0] = 1;

  for (let i=1; i<=total; i++) {
    let count=0;
    for (let j=0; j<steps.length; j++) {
      if (i>=steps[j]) {
        count += dp[i-steps[j]];
      }
    }
    dp[i] = count;
  }
  
  return dp[total];
}
/********************** */
let n = 4;
let steps = [1,2,3];
console.log(`findNumWaysSol1 ${findNumWaysSol1(n,steps)}`);
console.log(`findNumWaysSol2 ${findNumWaysSol2(n,steps)}`);
console.log(`findNumWaysSol3 ${findNumWaysSol3(n,steps)}`);