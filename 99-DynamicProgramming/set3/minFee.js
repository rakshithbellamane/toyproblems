/***************** */
const findMinFeeSol1 = (step, total, fees, jumps) => {
  if (step > total-1) return 0;

  let minFee = Number.MAX_VALUE;
  for (let i=0; i<jumps.length; i++) {
    let fee = Number.MAX_VALUE;

    let res = findMinFeeSol1(step+jumps[i], total, fees, jumps);

    if (res !== Number.MAX_VALUE)
      fee = res + fees[step];

    minFee = Math.min(minFee, fee);
  }

  return minFee;
}
/***************** */
const findMinFeeSol2 = (step, total, fees, jumps, dp=[]) => {
  if (step > total-1) return 0;

  if (dp[step]) return dp[step];
  let minFee = Number.MAX_VALUE;
  for (let i=0; i<jumps.length; i++) {
    let fee = Number.MAX_VALUE;

    let res = findMinFeeSol1(step+jumps[i], total, fees, jumps);

    if (res !== Number.MAX_VALUE)
      fee = res + fees[step];

    minFee = Math.min(minFee, fee);
  }

  dp[step] = minFee;
  return dp[step];
}
/***************** */
const findMinFeeSol3 = (totalSteps, fees, jumps) => {
  // for a given step, dp stores the min fee to get over that step. Doesn't include the fees for that step.
  // we need space to store results for 0 steps, so the dp array has totalStep+1 space.
  let dp = (new Array(totalSteps+1)).fill(Number.MAX_VALUE);

  // we will incrementally find the min fee to get to each step till we reach top the stairs.
  // min fee to get to the first step is the fee for that step

  dp[0] = 0; // no step to climb, so fee is 0
  dp[1] = fees[0]; // only one step, so the fee is for that step

  // loop through all the steps until we reach the last step.
  for (let step=2; step<=totalSteps; step++) {
    // loop through all the steps from which we could jump over the step.
    for (let i=0; i<jumps.length; i++) {
      if (step-jumps[i] >= 0)
      // dp[step] will be the min of any value in that is currently in dp[step] and step on which
      // we start including its fee
        dp[step] = Math.min(dp[step], dp[step-jumps[i]]+fees[step-jumps[i]]);
    }
  }

  return dp[totalSteps];
}
/***************** */

let n = 4;
let fees = [2,3,4,5];
let jumps = [1,2,3];
console.log(`findMinFeeSol1 ${findMinFeeSol1(0, n, fees, jumps)}`);
console.log(`findMinFeeSol2 ${findMinFeeSol2(0, n, fees, jumps)}`);
console.log(`findMinFeeSol3 ${findMinFeeSol3(n, fees, jumps)}`);