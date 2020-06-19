const SinglyLinkedList = require('../../DataStructures/SinglyLinkedList');

const isPalindrome = (node, length) => {
  if (length === 0 || length === 1) {
    return node.next;
  }

  let returnNode = isPalindrome(node.next, length - 2);

  // return returnNode !== false ? (returnNode.value === node.value ? (returnNode.next ? returnNode.next : true) : false) : false;

  if (returnNode !== false) {
    // compare the values of node and returnNode
    if (returnNode.value === node.value) {
      // check if we have reached end of the list
      if (returnNode.next === null) {
        // all the node values have matched
        return true;
      } else {
        // we still have nodes to compare
        return returnNode.next;
      }
    } else {
      // we have found a mismatch and we need to propagate false up the stack
      return false;
    }
  } else {
    // there was already a mismatch found, so keep propaging false up the stack
    return false;
  }
}

let myList = new SinglyLinkedList(1);
let node = myList.insertAfter(myList.head, 2);
node = myList.insertAfter(node, 3);
node = myList.insertAfter(node, 4);
node = myList.insertAfter(node, 3);
node = myList.insertAfter(node, 2);
node = myList.insertAfter(node, 1);

console.log(isPalindrome(myList.head, myList.length));