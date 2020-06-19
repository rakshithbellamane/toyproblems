class Tree {
  value;
  children;

  constructor (input) {
    this.value = input;
    this.children = [];
  }

  addChild (value) {
    let subTree = new Tree(value);
    this.children.push(subTree);

    return subTree;
  }

  traverseDepthFirst (callback,level=0) {
    this.children.forEach(node => {
      node.traverseDepthFirst(callback,level+1);
    });

    callback(this.value,level);
  }
}

const listOfDepths = (myBinaryTree) => {
  let levelLinkedListHeads = {};
  let levelLinkedListTails = {};

  myBinaryTree.traverseDepthFirst((value, level) => {
    if (levelLinkedListHeads[level]) {
      let node = {value, next: null};
      levelLinkedListTails[level].next = node;
      levelLinkedListTails[level] = node;
    } else {
      let node = {value, next: null};
      levelLinkedListHeads[level] = node;
      levelLinkedListTails[level] = node;
    }
  })

  return levelLinkedListHeads;
}

let myBinaryTree = new Tree(1);

let subTree1 = myBinaryTree.addChild(2);
let subTree2 = myBinaryTree.addChild(3);

subTree1.addChild(4);
let subTree3 = subTree1.addChild(5);
subTree3.addChild(7);

let subTree4 = subTree2.addChild(6);
subTree4.addChild(8);

console.log(listOfDepths(myBinaryTree))