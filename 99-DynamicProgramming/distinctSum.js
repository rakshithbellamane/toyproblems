const findDistinct = (coins, quantity, total) => {
  if (total === 0) return 0

  let sum = 0;

  for (let i=0; i<coins.length; i++) {
    sum = findDistinct(coins, )
  }
}

let coins = [10,50,100];
let quantity = [1, 2, 1];
console.log(`distinct ways ${findDistinct(coins, quantity, 4)}`);