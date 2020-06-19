/* this approach uses bitvector method */

const toggle = (bitVector, position) => {
  let mask = 1 << position;

  if ((bitVector & mask) === 0) {
    bitVector |= mask;
  } else {
    bitVector &= ~mask;
  }

  return bitVector;
}

const createBitVector = phrase => {
  let bitVector = 0;

  for (let i=0; i<phrase.length; i++) {
    let charCode = phrase.charCodeAt(i);
    bitVector = toggle(bitVector, charCode);
  }

  return bitVector;
}

const isPermutationOfPalindrome = phrase => {
  let bitVector = createBitVector(phrase);

  return (bitVector & (bitVector - 1)) === 0;
}

console.log(isPermutationOfPalindrome('abcba   c$$'));