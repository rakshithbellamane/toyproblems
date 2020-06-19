class Node {
  value;
  next;
  prev;

  constructor(value) {
    value ? this.value = value : this.value = null;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  head;
  tail;

  constructor (headValue) {
    if (headValue === undefined) console.log('Must provide value for the first node');
    
    this.head = new Node(headValue);
    this.tail = this.head;
  }

  insertAfter = (curNode, value) => {
    let newNode = new Node(value);

    // set the new node's pointers
    newNode.prev = curNode;
    newNode.next = curNode.next;

    // if the current node has a non null next node, then set the pointer of that node to the new node
    curNode.next && (curNode.next.prev = newNode);

    // set the current node's pointer to the new node
    curNode.next = newNode;

    // update the tail to newNode if curNode is the tail
    if (curNode === this.tail) this.tail = newNode;
  }

  insertBefore = (curNode, value) => {
    let newNode = new Node(value);

    // set the new node's pointers
    newNode.next = curNode;
    newNode.prev = curNode.prev;

    // if the current node has a non null previous node, then set the pointer of that node to the new node
    curNode.prev && (curNode.prev.next = newNode);

    // reset the current node's pointers
    curNode.prev = newNode;

    // update the head to newNode if curNode was the head
    if (curNode === this.head) this.head = newNode;
  }

  removeAfter = curNode => {
    let nextNode = curNode.next;

    if (nextNode) {
      // update the current node's pointer
      curNode.next = nextNode.next;

      // if the next node has a non null next node, then set the pointer of that node to the current node
      nextNode.next && (nextNode.next.prev = curNode);

      // if the next node is the tail, set the current node as the tail
      if (nextNode === this.tail) this.tail = curNode;

      // remove refererences of the nextNode
      nextNode.next = null;
      nextNode.prev = null;
    }
  }

  removeBefore = curNode => {
    let prevNode = curNode.prev;

    if (prevNode) {
      // update current node's pointers
      curNode.prev = prevNode.prev;

      // if the previous node has a non null prev, then update that node's pointers
      prevNode.prev && (prevNode.prev.next = curNode);

      // if the previous node is the head, update the head
      if (prevNode === this.head) this.head = curNode;

      // remove references of the previous node
      prevNode.next = null;
      prevNode.prev = null;
    }
  }

  removeNode = node => {
    if (node.next) {
      this.removeBefore(node.next);
    } else if (node.prev) {
      this.removeAfter(node.prev);
    } else {
      return false;
    }

    return true;
  }

  findNode = value => {
    let node = this.head;

    while (node) {
      if (node.value === value) {
        return node;
      } else {
        node = node.next;
      }
    }

    return null;
  }

  forEach = callBack => {
    let node = this.head;

    while (node) {
      let nextNode = node.next;
      callBack(node);
      
      node = nextNode;
    }
  }

  print = () => {
    let result = [];
    let node = this.head;

    while (node) {
      result.push(node.value);
      node = node.next;
    }

    return result.join(',');
  }
}

module.exports = DoublyLinkedList;

/*
let myList = new DoublyLinkedList(10);
myList.insertAfter(myList.head,20);
myList.insertAfter(myList.findNode(10),15);
myList.insertBefore(myList.findNode(20),18);
console.log(myList.print());
myList.removeAfter(myList.findNode(15));
console.log(myList.print());
myList.removeBefore(myList.findNode(20));
console.log(myList.print()); */