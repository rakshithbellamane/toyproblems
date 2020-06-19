const SinglyLinkedList = require('../../DataStructures/SinglyLinkedList');

const advanceNode = (node, offset) => {
  let count = 0;
  while(count < offset) {
    node = node.next;
    count++;
  }

  return node;
}

const listLength = list => {
  let node = list.head;
  let length = 0;

  while(node) {
    length++;
    node = node.next;
  }

  return length;
}

const intersection = (list1, list2) => {
  // if tails are different then return null
  if (list1.tail !== list2.tail) return null;

  // if lengths are different, then advance the list until the length is same
  let list1Node = list1.head;
  let list2Node = list2.head;

  let list1Length = listLength(list1);
  let list2Length = listLength(list2);

  if (list1Length > list2Length) {
    list1Node = advanceNode(list1Node, list1Length-list2Length)
  }

  if (list2Length > list1Length) {
    list2Node = advanceNode(list2Node, list2Length-list1Length)
  }

  // compare the lists to see if they intersect
  while (list1Node && list2Node) {
    if (list1Node === list2Node) return list1Node
    
    list1Node = list1Node.next;
    list2Node = list2Node.next;
  }

  return null;
}

let list1 = new SinglyLinkedList(1);
let node1 = list1.insertAfter(list1.head, 2);
node1 = list1.insertAfter(node1, 3);
node1 = list1.insertAfter(node1, 8);

let list2 = new SinglyLinkedList(5);
let node2 = list2.insertAfter(list2.head, 6);
node2.next = node1;

node1 = list1.insertAfter(node1, 4);

list2.tail = list1.tail;

console.log(intersection(list1,list2));