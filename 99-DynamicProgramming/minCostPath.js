let matrix = [[1,2,3],
              [4,8,2],
              [1,5,3]];

let minCostArr = (new Array(matrix.length)).fill((new Array(matrix[0].length)).fill(0));
  
minCostArr[0][0] = matrix[0][0];

const findMinCost = (m, n) => {
  if (m < 0 || n < 0) return 0;

  if (!minCostArr[m][n]) {
    minCostArr[m][n] = Math.min(findMinCost(m-1,n-1), findMinCost(m-1,n), findMinCost(m,n-1)) + matrix[m][n];
  }

  return minCostArr[m][n];
}

console.log(findMinCost(2, 2));