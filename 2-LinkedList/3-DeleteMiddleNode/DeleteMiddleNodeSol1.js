const SinglyLinkedList = require('../../DataStructures/SinglyLinkedList');

const deleteMiddleNode = delNode => {
  let nextNode = delNode.next;

  if (nextNode) {
    Object.assign(delNode, nextNode);

    nextNode.next = null;
  }
}

let myList = new SinglyLinkedList(10);
myList.insertAfter(myList.findNode(10),20);
myList.insertAfter(myList.findNode(20),30);
myList.insertAfter(myList.findNode(30),40);
myList.insertAfter(myList.findNode(40),50);
myList.insertAfter(myList.findNode(50),60);
myList.insertAfter(myList.findNode(60),70);
myList.print();
deleteMiddleNode(myList.findNode(40));
myList.print();