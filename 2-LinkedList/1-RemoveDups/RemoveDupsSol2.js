const DoublyLinkedList = require('../../DataStructures/DoublyLinkedList');

// this approach does not use any additional datastructure other than the linked list itself
const removeDup = linkedList => {
  let curNode = linkedList.head;
  let nodeAhead = curNode;

  linkedList.forEach(node => {
    let nodeAhead = node.next;
    while (nodeAhead) {
      let nodeAheadNext = nodeAhead.next;
      if (node.value === nodeAhead.value) {
        linkedList.removeNode(nodeAhead);
      }
      
      nodeAhead = nodeAheadNext;
    }
  });
}

let linkedList = new DoublyLinkedList(10);
linkedList.insertAfter(linkedList.findNode(10),20);
linkedList.insertAfter(linkedList.findNode(20),30);
linkedList.insertAfter(linkedList.findNode(30),40);
linkedList.insertAfter(linkedList.findNode(40),10);
linkedList.insertAfter(linkedList.findNode(30),20);
linkedList.insertAfter(linkedList.tail,40);
console.log(linkedList.print());
removeDup(linkedList);
console.log(linkedList.print());