class TreeNode {
  constructor (val) {
    this.value = val;
    this.right = null;
    this.left = null;
  }
}

const traverse = root => {
  let queue = [root];
  let depth = 0;

  while (queue.length) {
    depth++;
    let levelSize = queue.length;

    for (let i=0; i<levelSize; i++) {
      let node = queue.shift();
      if (!node.left || !node.right) return depth;
      queue.push(node.left);
      queue.push(node.right);
    }
  }

  return depth;
}

const root = new TreeNode(12);
// root.left = new TreeNode(7);
root.right = new TreeNode(1);
// root.left.left = new TreeNode(9);
// root.left.right = new TreeNode(11);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Level order traversal: ${traverse(root)}`);