const insertNumber = (n, m, i, j) => {
  let allOnes = ~0;
  let left = allOnes << (j+1);
  let right = (1 << i) - 1;
  
  let mask = left | right;

  let shiftedM = m << i;

  return (n & mask) | shiftedM;
}

console.log(insertNumber(parseInt('1011011011',2), parseInt('10111',2), 2, 6).toString(2));