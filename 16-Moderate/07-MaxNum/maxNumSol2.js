// the below approach handles overflow scenario. This happens when a & b have different signs.
// Let us consider the scenario where a & b have different signs.
// if a > 0 & b < 0 => we need to return a => k = sign(a);
// if a < 0 & b > 0 => we need to return b => k = sign(a);
// Let us consider the scenario where a & b have same signs. There is no chance of overflow since (a-b) will be less than either of the numbers.
// if a > b => we need to return a => k = sign(a-b);
// if a < b => we need to return b => k = sign(a-b);
const getMax = (a, b) => {
  let c = a - b;

  // get the signs
  let sa = sign(a);
  let sb = sign(b);
  let sc = sign(c);

  // XOR return 1 only when sa & sb are different. As discussed above, we need to use sa
  let useSignOfA = sa ^ sb;
  // if we are using sign(a) then we should NOT be using sign(a-b) and viceversa.
  // We can determine that by just flipping useSignOfA
  let useSignOfC = flip(sa ^ sb);

  // determine the final value of k. Whether we need to use sa & sc (sign(a-b))
  // if k is 1 we return a
  let k = useSignOfA * sa + useSignOfC * sc;
  // if k is 0, we return b. Hence q is flip(k)
  let q = flip(k);

  // return a or b based on k & q
  return a * k + b * q;
}

const flip = bit => {
  return 1 ^ bit;
}

const sign = num => {
  return flip((num >> 31) & 1);
}

console.log(getMax(-Number.MAX_VALUE, -11));