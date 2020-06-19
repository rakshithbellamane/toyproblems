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

  getBranchHeight() {
    //recursively add 1 to get the height of the branch
    let leftBranchHeight = this.children[0] ? this.children[0].getBranchHeight() + 1 : 0;
    let rightBranchHeight = this.children[1] ? this.children[1].getBranchHeight() + 1 : 0;

    // return the lenght of the biggest branch
    return leftBranchHeight > rightBranchHeight ? leftBranchHeight : rightBranchHeight;
  }

  isNodeBalanced () {
    // we need to add 1 to the height that we get from getBranchHeight because we child node also should be counted
    let leftBranchHeight = this.children[0] ? this.children[0].getBranchHeight() + 1 : 0;
    let rightBranchHeight = this.children[1] ? this.children[1].getBranchHeight() + 1: 0;

    return Math.abs(leftBranchHeight - rightBranchHeight) < 2;
  }

  traverseDepthFirst (callBack) {
    this.children.forEach(child => {
      child.traverseDepthFirst(callBack);
    })

    return callBack(this);
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

let treeBalanced = true;

myBinaryTree.traverseDepthFirst((node)  => {
  treeBalanced = treeBalanced && node.isNodeBalanced();
});

console.log(treeBalanced);