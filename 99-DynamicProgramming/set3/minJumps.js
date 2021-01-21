/**************** */
const findMinJumpsSol1 = (jumps, curIndex=0) => {
  if (curIndex === jumps.length-1) return 0;

  let minJumps = Number.MAX_VALUE;

  for (let i=1; i<=jumps[curIndex]; i++) {
    if (curIndex+i < jumps.length && jumps[curIndex+i]) {
      let res = findMinJumpsSol1(jumps, curIndex+i);

      let numJumps = Number.MAX_VALUE;
      if (res !== Number.MAX_VALUE)
        numJumps = res + 1;

      if (numJumps < minJumps) minJumps = numJumps;
    }
  }

  return minJumps;
}
/**************** */
const findMinJumpsSol2 = (jumps, curIndex=0, dp=[]) => {
  if (curIndex === jumps.length-1) return 0;

  if (dp[curIndex]) return dp[curIndex];
  let minJumps = Number.MAX_VALUE;

  for (let i=1; i<=jumps[curIndex]; i++) {
    if (curIndex+i < jumps.length && jumps[curIndex+i]) {
      let res = findMinJumpsSol1(jumps, curIndex+i);

      let numJumps = Number.MAX_VALUE;
      if (res !== Number.MAX_VALUE)
        numJumps = res + 1;

      if (numJumps < minJumps) minJumps = numJumps;
    }
  }

  dp[curIndex] = minJumps;
  
  return dp[curIndex];
}
/**************** */
const findMinJumpsSol3 = (jumps) => {
  // create dp array equal to the length of the jumps array
  let dp = (new Array(jumps.length)).fill(Number.MAX_VALUE);

  // min jumps to index 0 from index 0 is 0
  dp[0] = 0;

  // let us start from index 0 and see to which indices we can jump to starting with 1 which is the 1 jump from 0.
  // The min jumps to those indices is min(min(0)+1, min(index)). The 1 added to min(0) is the 1 jump to the next index.

  for (let start=0; start<jumps.length-1; start++) {
    for (let end=start+1; end<jumps.length && end<=start+jumps[start]; end++) {
      dp[end] = Math.min(dp[start]+1, dp[end]);
    }
  }
  
  return dp[jumps.length-1];
}
/**************** */
/**************** */
let jumps = [1,1,3,6,9,3,0,1,3];
console.log(`findMinJumpsSol1 ${findMinJumpsSol1(jumps)}`);
console.log(`findMinJumpsSol2 ${findMinJumpsSol2(jumps)}`);
console.log(`findMinJumpsSol3 ${findMinJumpsSol3(jumps)}`);