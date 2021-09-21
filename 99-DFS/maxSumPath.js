class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null; 
  }
};

let maxAllPathSum = Number.NEGATIVE_INFINITY;
let maxAllPath = [];

const find_maximum_path_sum = function(root) {
  find_maximum_path_sum_recursive(root);

  console.log(`maxAllPathSum ${maxAllPathSum}`);
  return maxAllPath;
}

const find_maximum_path_sum_recursive = function(root, curPath=[]) {
  if (root === null) return {maxSum: 0, maxPath: []};

  let {maxSum: leftMaxSum, maxPath: leftMaxPath} = find_maximum_path_sum_recursive(root.left);
  let {maxSum: rightMaxSum, maxPath: rightMaxPath} = find_maximum_path_sum_recursive(root.right);

  let curMaxSum = leftMaxSum + rightMaxSum + root.value;
  let curMaxPath = [...leftMaxPath, root.value, ...rightMaxPath];

  maxAllPathSum = Math.max(maxAllPathSum, curMaxSum);

  if (maxAllPathSum === curMaxSum) {
    maxAllPath = [...curMaxPath];
  }

  return {maxSum: Math.max(leftMaxSum, rightMaxSum)+root.value, maxPath: leftMaxSum > rightMaxSum ? [...leftMaxPath, root.value] : [...rightMaxPath, root.value]};
};



var root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
maxAllPathSum = Number.NEGATIVE_INFINITY;
maxAllPath = [];
console.log(`Maximum Path Sum: ${find_maximum_path_sum(root)}`)

root.left.left = new TreeNode(1)
root.left.right = new TreeNode(3)
root.right.left = new TreeNode(5)
root.right.right = new TreeNode(6)
root.right.left.left = new TreeNode(7)
root.right.left.right = new TreeNode(8)
root.right.right.left = new TreeNode(9)
maxAllPathSum = Number.NEGATIVE_INFINITY;
maxAllPath = [];
console.log(`Maximum Path Sum: ${find_maximum_path_sum(root)}`)

root = new TreeNode(-1)
root.left = new TreeNode(-3)
maxAllPathSum = Number.NEGATIVE_INFINITY;
maxAllPath = [];
console.log(`Maximum Path Sum: ${find_maximum_path_sum(root)}`)
