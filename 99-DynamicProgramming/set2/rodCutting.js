// recursion brute force
const findMaxPriceSol1 = (lengths, prices, rodLength, curIndex=0) => {
  if (rodLength === 0 || (lengths.length !== prices.length) || curIndex >= lengths.length) return 0;

  let maxPrice1 = 0, maxPrice2 = 0;
  
  if (rodLength >= lengths[curIndex])
    maxPrice1 = prices[curIndex] + findMaxPriceSol1(lengths, prices, rodLength-lengths[curIndex], curIndex);

  maxPrice2 = findMaxPriceSol1(lengths, prices, rodLength, curIndex+1);

  return Math.max(maxPrice1, maxPrice2);
}

/*************************************************** */
// recursion with memoization
const findMaxPriceSol2 = (lengths, prices, rodLength, curIndex=0, dp=[]) => {
  if (rodLength === 0 || (lengths.length !== prices.length) || curIndex >= lengths.length) return 0;

  dp[curIndex] = dp[curIndex] || [];

  if (dp[curIndex][rodLength] !== undefined) return dp[curIndex][rodLength];

  let maxPrice1 = 0, maxPrice2 = 0;

  if (rodLength >= lengths[curIndex])
    maxPrice1 = prices[curIndex] + findMaxPriceSol2(lengths, prices, rodLength-lengths[curIndex], curIndex);

  maxPrice2 = findMaxPriceSol2(lengths, prices, rodLength, curIndex+1);

  dp[curIndex][rodLength] = Math.max(maxPrice1, maxPrice2);

  return dp[curIndex][rodLength];
}

/**************************************************** */
// bottom up dp with O(lengths*rodLength)

const findMaxPriceSol3 = (lengths, prices, rodLength) => {
  let dp = (new Array(lengths.length)).fill(0).map(() => (new Array(rodLength+1)).fill(0));

  if (rodLength === 0 || (lengths.length !== prices.length)) return 0;

  for (let i=0; i<lengths.length; i++) {
    dp[i][0] = 0;
  }

  for (let i=1; i<=rodLength; i++) {
    if (lengths[0] <= i) {
      dp[0][i] = Math.trunc(i/lengths[0])*prices[0];
    }
  }

  for (let i=1; i<lengths.length; i++) {
    for (let j=1; j<=rodLength; j++) {
      let maxPrice1 = 0, maxPrice2 = 0;
      
      if (j>=lengths[i])
        maxPrice1 = prices[i] + dp[i][j-lengths[i]];
      
      maxPrice2 = dp[i-1][j];

      dp[i][j] = Math.max(maxPrice1, maxPrice2);
    }
  }

  let remainingRodLength = rodLength;
  let cuts = [];
  let i=lengths.length-1;
  while (remainingRodLength !== 0) {
    if (i === 0 || dp[i][remainingRodLength] !== dp[i-1][remainingRodLength]) {
      cuts.push(lengths[i]);
      remainingRodLength -= lengths[i];
    } else {
      i--;
    }
  }

  console.log(cuts);
  return dp[lengths.length-1][rodLength];
}

/*************************************************** */
let lengths = [1,2,3,4,5];
let prices = [2,6,7,10,13];

console.log(`findMaxPriceSol1 ${findMaxPriceSol1(lengths, prices, 5)}`);
console.log(`findMaxPriceSol2 ${findMaxPriceSol2(lengths, prices, 5)}`);
console.log(`findMaxPriceSol3 ${findMaxPriceSol3(lengths, prices, 5)}`);