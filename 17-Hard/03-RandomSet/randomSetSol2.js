const getRandomSet = (arr, m) => {
  // let us assume arr has > m elements.
  let subset = [];

  // pick the first m elements from arr and put into subset
  for (let i=0; i<m; i++) subset.push(arr[i]);

  // go through the remainder of the arr and determine if an element in subset needs to be swapped randomly
  for (let i=m; i<arr.length; i++) {
    // to include ith ele, we need to pass (i+1) to random num generator
    let k = Math.floor(Math.random()*(i+1));
    
    // if k < m, then replace kth ele in subset with ith ele from arr
    if (k < m) subset[k] = arr[i];
  }

  return subset;
}

let arr = [1,2,3,4,5,6,7,8];
console.log(getRandomSet(arr, 5));