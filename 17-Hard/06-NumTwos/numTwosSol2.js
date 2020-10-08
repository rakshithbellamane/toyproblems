// *** this is not working *** please see example in book
const findNumTwo = input => {
  let num = input;
  let count = 0;
  // process each digit in the number
  let prevDigit = null;
  let place = 0;
  while (num > 0) {
    let digit = num % 10;
    
    let roundDownNum = num - (num%10);
    let roundUpNum = roundDownNum + 10;

    if (digit < 2) {
      count += roundDownNum/10;
    } else if (digit > 2) {
      count += roundUpNum/10;
    } else {
      count += roundDownNum/10 + (prevDigit ? prevDigit : 0) + 1
    }

    num = Math.floor(num/10);
    prevDigit = digit;
    place++;
  }

  return count;
}

console.log(findNumTwo(110));