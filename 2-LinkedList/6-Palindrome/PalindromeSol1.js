const SinglyLinkedList = require('../../DataStructures/SinglyLinkedList');

const reverseList = list => {
  let node = list.head;
  let reversedList = new SinglyLinkedList(node.value);

  node = node.next;
  reversedListHead = reversedList.head;

  while (node) {
    reversedListHead = reversedList.insertBefore(reversedListHead, node.value);
    node = node.next;
  }

  return reversedList;
}

const isPalindrome = list => {
  let reversedList = reverseList(list);
  let listNode = list.head;
  let reversedListNode = reversedList.head;

  while (listNode) {
    if (listNode.value !== reversedListNode.value) return false;

    listNode = listNode.next;
    reversedListNode = reversedListNode.next;
  }
  
  return true;
}

let myList = new SinglyLinkedList(1);
let node = myList.insertAfter(myList.head, 9);
node = myList.insertAfter(node, 2);
node = myList.insertAfter(node, 9);
node = myList.insertAfter(node, 1);

console.log(isPalindrome(myList));