// this solution is a relatively stable version

const SinglyLinkedList = require('../../DataStructures/SinglyLinkedList');

const partition = (head, x) => {
  let beforeList = null;
  let afterList = null;

  let curNode = head;

  // only one element
  if (curNode.next === null) return head;

  while (curNode) {
    if (curNode.value < x) {
      if (beforeList) {
        beforeList.insertAfter(beforeList.tail, curNode.value);
      } else {
        beforeList = new SinglyLinkedList(curNode.value);
      }
    } else {
      if (afterList) {
        afterList.insertAfter(afterList.tail, curNode.value);
      } else {
        afterList = new SinglyLinkedList(curNode.value);
      }
    }

    curNode = curNode.next;
  }

  if (beforeList && afterList) {
    beforeList.tail.next = afterList.head;
    beforeList.tail = afterList.tail;
    
    afterList.head = null;
    afterList.tail = null;

    return beforeList;
  } else if (beforeList) {
    return beforeList;
  } else {
    return afterList;
  }
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