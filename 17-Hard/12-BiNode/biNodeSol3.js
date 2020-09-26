class BiNode {
  val;
  node1;
  node2;

  constructor(value) {
    this.val = value;
    this.node1 = null;
    this.node2 = null;
  }
}

// function to build the bst for the given root
const buildBST = (root, num) => {
  let newNode = new BiNode(num);
  let curNode = root;

  while (true) {
    if (num < curNode.val) {
      if (curNode.node1) curNode = curNode.node1;
      else {
        curNode.node1 = newNode;
        break;
      }
    } else {
      if (curNode.node2) curNode = curNode.node2;
      else {
        curNode.node2 = newNode;
        break;
      }
    }
  }
}

// function to convert BST to a circurlar LL
const convertToCircular = (root) => {
  if (root === null) return null;

  // convert each part of the root node to a circular LL
  let part1 = convertToCircular(root.node1);
  let part2 = convertToCircular(root.node2);

  // if both part1 & part3 are null, return root as head of the combined circular LL
  if (part1 === null && part2 === null) {
    root.node1 = root;
    root.node2 = root;

    return root;
  }

  let head;
  // if both part1 & part2 are not NOT null, join part1, root and part2 fixing their links
  if (part1 !== null && part2 !== null) {
    let part1Tail = part1.node1;
    let part2Tail = part2.node1;

    // link part1 tail to root
    part1Tail.node2 = root;
    root.node1 = part1Tail;

    // link root to part2 head
    root.node2 = part2;
    part2.node1 = root;

    // link the head and tail of the new list
    part1.node1 = part2Tail;
    part2Tail.node2 = part1;
    
    // set the head to part1
    head = part1;
  // part1 is not null and part2 is null
  } else if (part1 !== null) {
    let part1Tail = part1.node1;

    // link the part1 tail to root
    part1Tail.node2 = root;
    root.node1 = part1Tail;

    // link the part1 head to root
    part1.node1 = root;
    root.node2 = part1;

    // set the head to part1
    head = part1;
  } else if (part2 !== null) {
    part2Tail = part2.node1;

    // link the root to part2 head
    part2.node1 = root;
    root.node2 = part2;

    // link the part2 tail to root
    part2Tail.node2 = root;
    root.node1 = part2Tail;

    // set head to root
    head = root;
  }

  return head;
}

// function to convert BST to a doubly linked list
const convert = (root) => {
  // convert the BST to a circular LL.
  let head = convertToCircular(root);
  // break the circularity
  head.node1.node2 = null;
  head.node1 = null;

  return head;
}

const root = new BiNode(7);
buildBST(root,2);
buildBST(root,3);
buildBST(root,1);
buildBST(root,8);
buildBST(root,6);
buildBST(root,5);

console.log(convert(root));