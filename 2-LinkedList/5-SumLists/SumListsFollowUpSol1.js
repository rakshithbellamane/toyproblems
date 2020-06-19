const SinglyLinkedList = require('../../DataStructures/SinglyLinkedList');

const padZeros = (list1, list2) => {
  if (list1.length < list2.length) {
    let node = list1.head;
    for (i=0; i< (list2.length-list1.length); i++) {
      node = list1.insertBefore(node, 0);
    }
  }

  if (list2.length < list1.length) {
    let node = list2.head;
    for (i=0; i< (list1.length-list2.length); i++) {
      node = list2.insertBefore(node, 0);
    }
  }
}

const sumLists = (list1, list2) => {

  if (list1.length !== list2.length) {
    padZeros(list1, list2);
  }

  const sumPaddedLists = (node1, node2) => {
    if (node1.next === null && node2.next === null) {
      let node = {};
      node.value = (node1.value + node2.value) % 10;
      node.next = null;
  
      return {
        node,
        carry: (node1.value + node2.value > 10) ? 1 : 0,
      };
    }
  
    let result = sumPaddedLists(node1.next ? node1.next : node1,
                          node2.next ? node2.next : node2);
    
    let newNode = {};
    newNode.next = result.node;
    newNode.value = (node1.value + node2.value + result.carry) % 10;
  
    return {
      node: newNode,
      carry: (node1.value + node2.value + result.carry) > 10 ? 1 : 0,
    };
  };

  return sumPaddedLists(list1.head, list2.head);
}

let list1 = new SinglyLinkedList(6)
let node = list1.insertAfter(list1.head, 1);
node = list1.insertAfter(node, 7);

let list2 = new SinglyLinkedList(2);
node = list2.insertAfter(list2.head, 9);
node = list2.insertAfter(node, 5);

let result = sumLists(list1, list2);

node = result.node;

while (node) {
  console.log(node.value);
  node = node.next;
}