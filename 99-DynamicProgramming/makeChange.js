const findNumWays = (coins, numCoins, sum) => {
  let table = (new Array(sum+1)).fill(0);

  table[0] = 1;

  for (let i=0; i<numCoins; i++) {
    for (let j=coins[i]; j<=sum; j++) {
      table[j] += table[j-coins[i]];
    }
  }

  return table[sum];
}

let coins = [1,3,5];
let sum = 6;

console.log(findNumWays(coins, coins.length, sum));