const findLenNoDup = input => {
  let left = 0;
  let right = input.length > 1 ? 1 : 0;

  while (right < input.length) {
    if (input[left] === input[right])
      input.splice(right,1);
    else {
      left++;
      right++;
    }
  }

  return input;
}

let input = [2, 3, 3, 3, 6, 9, 9];
console.log(`${findLenNoDup(input)}`);