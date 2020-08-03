const makeChange = (amt, denoms, index) => {
  console.log(`amt = ${amt} index = ${index} denom = ${denoms[index]}`);
  if (index >= denoms.length - 1) {
    return 1;
  }
  
  let denomAmt = denoms[index];
  let ways = 0;

  for (let i=0; i*denomAmt <= amt; i++) {
    let amtRemaining = amt - i*denomAmt;
    ways += makeChange(amtRemaining, denoms, index+1);
  }

  return ways;
};

console.log(makeChange(10, [10,5,1], 0));