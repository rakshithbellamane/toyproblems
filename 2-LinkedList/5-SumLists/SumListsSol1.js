const SinglyLinkedList = require('../../DataStructures/SinglyLinkedList');

const sumLists = (node1, node2, carry) => {
  if (node1 === null && node2 === null && carry === 0) {
    return null;
  }

  let value = carry;

  if (node1) {
    value += node1.value;
  }

  if (node2) {
    value += node2.value;
  }

  let result = {};
  result.value = value % 10;
  result.next = sumLists(node1 ? node1.next : null,
                        node2 ? node2.next : null,
                        value > 10 ? 1 : 0);
  
  return result;
}

let list1 = new SinglyLinkedList(7)
let node = list1.insertAfter(list1.head, 1);
node = list1.insertAfter(node, 6);

let list2 = new SinglyLinkedList(5);
node = list2.insertAfter(list2.head, 9);
node = list2.insertAfter(node, 2);

let result = sumLists(list1.head, list2.head, 0);

node = result;

while (node) {
  console.log(node.value);
  node = node.next;
}