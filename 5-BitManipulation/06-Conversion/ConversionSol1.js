const numBitConvert = (num1, num2) => {
  let count =0;

  for (let c = num1 ^ num2; c !== 0; c >>>= 1) {
    count += c & 1;
  }

  return count;
}

let num1 = parseInt('1000001', 2);
let num2 = parseInt('0001101', 2);

console.log(numBitConvert(num1,num2));