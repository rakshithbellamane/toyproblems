const SinglyLinkedList = require('../../DataStructures/SinglyLinkedList');

const KthToLast = (node, k) => {
  if (node === null) return 0;

  let index = KthToLast(node.next, k) + 1;

  if (index === k) console.log(node.value);

  return index;
}

let myList = new SinglyLinkedList(10);
myList.insertAfter(myList.findNode(10),20);
myList.insertAfter(myList.findNode(20),30);
myList.insertAfter(myList.findNode(30),40);
myList.insertAfter(myList.findNode(40),50);
myList.insertAfter(myList.findNode(50),60);
myList.insertAfter(myList.findNode(60),70);
myList.print();

KthToLast(myList.head, 3);
