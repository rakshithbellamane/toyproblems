const makeChange = (amt, denoms, index, map={}) => {
  console.log(`amt = ${amt} index = ${index} denom = ${denoms[index]}`);
  
  if (map[`${amt}-${index}`]) {
    console.log('used map');
    return map[`${amt}-${index}`];
  }

  if (index >= denoms.length - 1) return 1;
  
  let denomAmt = denoms[index];
  let ways = 0;

  for (let i=0; i*denomAmt <= amt; i++) {
    let amtRemaining = amt - i*denomAmt;
    ways += makeChange(amtRemaining, denoms, index+1);
  }

  map[`${amt}-${index}`] = ways;
  console.log(map);

  return ways;
};

console.log(makeChange(100, [25, 10,5,1], 0));