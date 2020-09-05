const negate = num => {
  let neg = 0;
  // if the num < 0, then result will be +ve
  // if the num > 0, then result will be -ve
  let newSign = num > 0 ? -1 : 1;
  let input = num;

  // start the delta with the -1 or +1
  let delta = newSign;

  // keep adding the delta to the input num until it becomes 0
  while (input !== 0) {
    input += delta;
    neg += delta;

    // double the delta
    delta += delta;
    
    // determine if adding the delta would result in change of sign
    // if yes, the reset delta back to newSign
    if ((num < 0 && (input + delta) > 0) || (num > 0 && (input+delta) < 0)) 
      delta = newSign;
  }

  return neg;
}

const abs = num => {
  if (num < 0) return negate(num);

  return num;
}

const subtraction = (a, b) => {
  let negateB = negate(b);

  return a+negateB;
}

multiplication = (a, b) => {
  let absB = b;
  let result = 0;
  if (b < 0) absB = abs(b);

  for (let i=0; i<absB; i++) {
    result += a;
  }

  if (b < 0) result = negate(result);

  return result;
}

const division = (numerator, denominator) => {
  let result = 0;
  let absNu=numerator, absDen=denominator;

  // take care numerator or denominator being 0
  if (numerator === 0) return 0;
  if (denominator === 0) return null;

  // if either numerator or denominator is < 0, then change them to absolute numbers.
  if (numerator < 0) absNu = abs(numerator);
  if (denominator < 0) absDen = abs(denominator);

  // determine the number of times denominator is present in numerator
  let sum = absDen;
  while (sum <= absNu) {
    result += 1;
    sum += absDen;
  }

  // if numerator or denominator were < 0, then we need to negate the result
  if (numerator < 0 || denominator < 0) result = negate(result);

  return result;
}

console.log(division(256,-3));
console.log(subtraction(256,3));
console.log(multiplication(4,-3));
// console.log(negate(10));