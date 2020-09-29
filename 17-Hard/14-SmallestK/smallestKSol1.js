const findSmallestKEles = (arr, k) => {
  const sortArr = arr.sort((a,b) => (a-b));
  return arr.slice(0,k);
}

const arr = [3,8,6,7,1,0,-1,-2,11];
console.log(findSmallestKEles(arr, 5));