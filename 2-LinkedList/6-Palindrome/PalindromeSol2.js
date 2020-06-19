const SinglyLinkedList = require('../../DataStructures/SinglyLinkedList');

const isPalindrome = list => {
  let slow = list.head;
  let fast = list.head;
  let stack = [];

  while (fast !== null && fast.next !== null) {
    stack.push(slow.value);

    slow = slow.next;
    fast = fast.next.next;
  }

  // odd number of elements
  if (fast !== null) slow = slow.next;

  while (slow) {
    let popVal = stack.pop();

    if (popVal !== slow.value) return false;

    slow = slow.next;
  }

  return true;
}

let myList = new SinglyLinkedList(1);
let node = myList.insertAfter(myList.head, 9);
node = myList.insertAfter(node, 2);
node = myList.insertAfter(node, 9);
node = myList.insertAfter(node, 1);

console.log(isPalindrome(myList));