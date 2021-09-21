class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.next = null;
  }

  // level order traversal using 'next' pointer
  print_level_order() {
    console.log("Level order traversal using 'next' pointer: ");
    let nextLevelRoot = this;
    while (nextLevelRoot !== null) {
      let current = nextLevelRoot;
      nextLevelRoot = null;
      while (current != null) {
        process.stdout.write(`${current.val} `);
        if (nextLevelRoot === null) {
          if (current.left !== null) {
            nextLevelRoot = current.left;
          } else if (current.right !== null) {
            nextLevelRoot = current.right;
          }
        }
        current = current.next;
      }
      console.log();
    }
  }
};

const connect_level_order_siblings = function(root) {
  let queue = [root];

  while (queue.length) {
    let queueSize = queue.length;

    let prev = queue.shift();
    if (prev.left) queue.push(prev.left);
    if (prev.right) queue.push(prev.right);

    for (let i=1; i<queueSize; i++) {
      let cur = queue.shift();
      
      if (cur.left) queue.push(cur.left);
      if (cur.right) queue.push(cur.right);

      prev.next = cur;
      prev = cur;
    }

    prev.next = null;
  }

  return root;
};


var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
connect_level_order_siblings(root);

root.print_level_order()
