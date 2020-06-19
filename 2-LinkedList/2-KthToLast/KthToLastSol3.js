const SinglyLinkedList = require('../../DataStructures/SinglyLinkedList');

const KthToLast = (head, k) => {
  let p1 = head;
  let p2 = head;

  let i = 1;

  while (i < k) {
    p1 = p1.next;
    i++;
  }

  while (p1.next) {
    p1 = p1.next;
    p2 = p2.next;
  }

  return p2;
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

