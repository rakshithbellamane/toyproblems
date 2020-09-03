// https://blog.logrocket.com/interesting-use-cases-for-javascript-bitwise-operators/

const findMax = (a, b) => {
  // get an indicator if a >= b
  // 1 if (a-b) >= 0 => a >= b
  // 0 if (a-b) < 0 => a < b
  let k = sign(a - b);

  // get the opposite of a's indicator which is the indicator whether b < a
  let q = flip(k);

  // if K is 1 then we return a. If k is 0, then we return b
  return k * a + q * b;
}

const sign = num => {
  // right shift by 31 and determine whether the number if +ve or -ve
  // since the sign bit is 1 for -ve, we flip it to 0 to indicate that it is NOT +ve
  return flip((num >> 31) & 1);
}

const flip = bit => {
  return 1 ^ bit;
}

console.log(findMax(Number.MIN_VALUE * 2, -11));