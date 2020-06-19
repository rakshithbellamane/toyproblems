class BalancedBinaryTree {
  value;
  children;

  constructor(inputValue) {
    this.value = inputValue;
    this.children = [];
  }

  addChild (inputValue) {
    if (this.children.length === 2) return null;
    
    let childTree = new BalancedBinaryTree(inputValue);
    this.children.push(childTree);

    return childTree;
  }

  isNodeBalanced () {
    let leftBranch = this.children[0] ? this.children[0].isNodeBalanced() : {isBalanced: true, height: 0};
    let rightBranch = this.children[1] ? this.children[1].isNodeBalanced(): {isBalanced: true, height: 0};

    let result = {};
    if (Math.abs(leftBranch.height - rightBranch.height) > 1) {
      result.isBalanced = false;
    } else if (!leftBranch.isBalanced || !rightBranch.isBalanced) {
      result.isBalanced = false;
    } else {
      result.isBalanced = true;
    }
    result.height = (leftBranch.height > rightBranch.height ? leftBranch.height : rightBranch.height) + 1;

    return result;
  }
}

let myBinaryTree = new BalancedBinaryTree(1);

let subTree1 = myBinaryTree.addChild(2);
let subTree2 = myBinaryTree.addChild(3);

subTree1.addChild(4);
let subTree3 = subTree1.addChild(5);
subTree3.addChild(7);

let subTree4 = subTree2.addChild(6);
let subTree5 = subTree2.addChild(9);
subTree4.addChild(8);

console.log(myBinaryTree.isNodeBalanced().isBalanced);