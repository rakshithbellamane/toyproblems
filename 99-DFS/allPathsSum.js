class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null; 
  }
};


const find_paths = function(root, sum, allPaths=[], curPath=[]) {
  if (root === null) return allPaths;

  curPath.push(root.value);

  if (root.value === sum && (!root.left && !root.right)) {
    allPaths.push([...curPath]);
  } else {
    find_paths(root.left, sum-root.value, allPaths, curPath);
    find_paths(root.right, sum-root.value, allPaths, curPath);
  }

  curPath.pop();

  return allPaths;
};



var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(4)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
sum = 23
console.log(`Tree paths with sum: ${sum}: ${find_paths(root, sum)}`)
