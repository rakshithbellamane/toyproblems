class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null; 
  }
};


const has_path = function(root, sum) {
  let leftHasPath = false;
  let rightHasPath = false;

  if (root === null) {
    if (sum === 0) return true;
    else return false;
  }

  if (sum <= 0) return false;

  leftHasPath = has_path(root.left, sum-root.value)
  if (!leftHasPath) {
    rightHasPath = has_path(root.right, sum-root.value);
  }
  
  return leftHasPath || rightHasPath;
};


var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
console.log(`Tree has path: ${has_path(root, 23)}`)
console.log(`Tree has path: ${has_path(root, 16)}`)
