const binaryToString = inputNum => {
  if (inputNum >=1 || inputNum <= 0) return 'ERROR';

  let num = inputNum;
  let frac = 0.5;
  let binary = '.';

  while (num > 0) {
    if (binary.length === 32) return binary;

    if (num >= frac) {
      binary += '1';
      num -= frac;
    } else {
      binary += '0';
    }

    frac /= 2;
  }

  return binary;
}

console.log(binaryToString(0.72));