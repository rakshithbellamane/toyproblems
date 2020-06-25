const getNext = n => {
  let c = n, c0=0, c1=0;

  while (((c & 1) === 0) && (c !== 0)) {
    c0++;
    c >>= 1;
  }

  while ((c & 1) === 1) {
    c1++;
    c >>= 1;
  }

  if (c0+c1 === 31 || c0+c1 === 0) return null;

  let p = c1 + c0;

  n |= 1 << p;
  n &= ~((1 << p) - 1);
  n |= (1 << (c1 - 1)) - 1;

  return n;
}

const getPrev = n => {
  let c = n, c0 = 0, c1 = 0;

  while ( (c & 1) === 1) {
    c1++;
    c >>= 1;
  }

  if (c === 0) return null;

  while ( (c & 1) === 0 && (c !== 0)) {
    c0++;
    c >>= 1;
  }

  let p = c1 + c0;

  n &= ((~0) << (p + 1));
  let mask = (1 << (c1+1)) - 1;
  n |= mask << (c0 - 1);

  return n;
}

let num = parseInt('11011001111100', 2);
console.log(getNext(num).toString(2));

num = parseInt('10011110000011',2);
console.log(getPrev(num).toString(2));