const findTargetSum = (input, target) => {
  let p1 = 0;
  let p2 = input.length-1;

  while (p1 !== p2) {
    if ((input[p1] + input[p2]) === target) return [p1,p2];
    if ((input[p1] + input[p2]) > target )
      p2--;
    if ((input[p1] + input[p2]) < target)
      p1++;
  }

  return [];
}

let input = [2, 5, 9, 11];
let target = 11;

console.log(`${findTargetSum(input, target)}`);