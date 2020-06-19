const SinglyLinkedList = require('../../DataStructures/SinglyLinkedList');

const partition = (head, x) => {
  let curNode = head;
  let partitionList = null;

  while (curNode) {
    if (curNode.value < x) {
      if (partitionList) {
        partitionList.insertAfter(partitionList.head, curNode.value);
      } else {
        partitionList = new SinglyLinkedList(curNode.value);
      }
    } else {
      if (partitionList) {
        partitionList.insertAfter(partitionList.tail, curNode.value);
      } else {
        partitionList = new SinglyLinkedList(curNode.value);
      }
    }

    curNode = curNode.next;
  }

  return partitionList
}

let myList = new SinglyLinkedList(10);
myList.insertAfter(myList.findNode(10),30);
myList.insertAfter(myList.findNode(30),20);
myList.insertAfter(myList.findNode(20),15);
myList.insertAfter(myList.findNode(15),50);
myList.insertAfter(myList.findNode(50),60);
myList.insertAfter(myList.findNode(60),12);
myList.print();

let partitionList = partition(myList.head, 30);
partitionList.print();