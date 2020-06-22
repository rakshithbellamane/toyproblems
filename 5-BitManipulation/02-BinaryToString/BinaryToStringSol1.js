const binaryToString = (inputNum) => {
  if (inputNum >= 1 || inputNum <= 0) return 'ERROR';

  let binary = '.';

  let num = inputNum;

  while (num > 0) {
    if (binary.length >= 32) return binary;

    num = 2 * num;

    if (num >= 1) {
      binary += '1';
      num -= 1;
    } else {
      binary += '0';
    }
  }

  return binary;
}

console.log(binaryToString(0.72));