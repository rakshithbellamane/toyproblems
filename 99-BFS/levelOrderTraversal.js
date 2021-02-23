class TreeNode {
  constructor (val) {
    this.value = val;
    this.right = null;
    this.left = null;
  }
}

const traverse = root => {
  let queue = [root];
  let result = [];

  while (queue.length) {
    let levelSize = queue.length;
    let level = [];

    for (let i=0; i<levelSize; i++) {
      let node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      level.push(node.value);
    }

    result.push(level);
  }

  return result;
}

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Level order traversal: ${traverse(root)}`);