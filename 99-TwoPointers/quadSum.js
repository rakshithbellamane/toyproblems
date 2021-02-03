const findPairs = (arr, target, f, s, quads) => {
  let l=s+1;
  let r=arr.length-1;

  while (l < r) {
    let curSum = arr[l]+arr[r];

    if (curSum === target) {
      quads.push([arr[f],arr[s],arr[l],arr[r]]);

      l++;
      r--;
      while (l < r && arr[l-1] === arr[l])
        l++;

      while (l < r && arr[r] === arr[r+1])
        r--;
    }

    if (curSum < target)
      l++;

    if (curSum > target)
      r--;
  }
}

const findQuads = (input, target) => {
  let arr = input.sort((a,b) => a-b);
  let quads = [];

  for (let i=0; i<arr.length-2; i++) {
    for (let j=i+1; j<arr.length-2; j++) {
      if (arr[j] === arr[j-1])
        continue;
      
      let curSum = arr[i]+arr[j];
      findPairs(arr, target-curSum, i, j, quads);
    }
  }

  return quads;
}

let input = [2, 0, -1, 1, -2, 2];
let target = 2;
console.log(findQuads(input, target));