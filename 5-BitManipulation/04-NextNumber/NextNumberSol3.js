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

  return n + (1 << c0) + (1 << (c1 - 1)) - 1;
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

  return n - (1 << c1) - (1 << (c0 - 1)) + 1;
}

let num = parseInt('11011001111100', 2);
console.log('11011001111100');
console.log(getNext(num).toString(2));

num = parseInt('10011110000011',2);
console.log('10011110000011');
console.log(getPrev(num).toString(2));