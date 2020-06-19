const SinglyLinkedList = require('../../DataStructures/SinglyLinkedList');

const KthToLast = (node, k, index={value: 0}) => {
  if (node === null) return null;

  let kthNode = KthToLast(node.next, k, index);
  
  index.value++;

  if (index.value === k) return node;

  return kthNode;
}

let myList = new SinglyLinkedList(10);
myList.insertAfter(myList.findNode(10),20);
myList.insertAfter(myList.findNode(20),30);
myList.insertAfter(myList.findNode(30),40);
myList.insertAfter(myList.findNode(40),50);
myList.insertAfter(myList.findNode(50),60);
myList.insertAfter(myList.findNode(60),70);
myList.print();

console.log(KthToLast(myList.head, 3).value);
