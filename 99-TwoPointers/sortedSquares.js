const getSortedSquares = input => {
  let left = 0;
  let right = input.length-1;
  let squares = new Array(input.length);
  let i = input.length-1;

  while (left <= right) {
    let leftAbs = Math.abs(input[left]);
    let rightAbs = Math.abs(input[right]);

    if (leftAbs === rightAbs) {
      squares[i--] = Math.pow(rightAbs,2);
      squares[i--] = Math.pow(leftAbs,2);
      left++;
      right--;
    }

    if (rightAbs > leftAbs) {
      squares[i--] = Math.pow(rightAbs,2);
      right--;
    }

    if (leftAbs > rightAbs) {
      squares[i--] = Math.pow(leftAbs, 2);
      left++;
    }
  }

  return squares;
}

let input = [-2,-1,0,2,3];
console.log(`${getSortedSquares(input)}`);