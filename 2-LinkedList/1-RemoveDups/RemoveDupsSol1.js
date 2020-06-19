const HashTable = require('../../DataStructures/HashTable');
const DoublyLinkedList = require('../../DataStructures/DoublyLinkedList');

const removeDup = linkedList => {
  let myMap = new HashTable();

  linkedList.forEach(node => {
    if (myMap.has(node.value)) {
      linkedList.removeNode(node);
    } else {
      myMap.set(node.value, node);
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