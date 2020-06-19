class Node {
  value;
  next;

  constructor (value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor (value) {
    let node = new Node(value);

    this.head = node;
    this.tail = node;
    this.length++;
  }

  find = value => {
    let node = this.head;

    while (node) {
      if (node.value === value) return node;
      node = node.next;
    }
  }

  insertAfter = (curNode, value) => {
    let newNode = new Node(value);

    if (curNode.next) {
      newNode.next = curNode.next;
      curNode.next = newNode;
    } else {
      curNode.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return newNode;
  }

  insertBefore = (curNode, value) => {
    let node = this.head;

    if (this.head === curNode) {
      let newNode = new Node(value);

      newNode.next = curNode;
      this.head = newNode;
      this.length++;
      
      return newNode;
    } else {
        while (node) {
        
          if (node.next === curNode) {
            this.length++;
            return this.insertAfter(node, value);
          }
    
          node = node.next;
        }
    }
  }

  removeAfter = curNode => {
    let delNode = curNode.next;

    if (delNode) {
      curNode.next = delNode.next;

      if (delNode === this.tail) this.tail = curNode;

      delNode.next = null;

      this.length--;
      return true;
    }

    return false;
  }

  removeBefore = curNode => {
    let node = this.head;

    // if the node to be removed is the head
    if (node.next === curNode) {
      this.head = curNode;
      node.next = null;

      this.length--;
      return true;
    }

    while (node) {
      if (node.next.next === curNode) {
        let delNode = node.next;

        node.next = curNode;
        delNode.next = null;

        this.length--;
        return true;
      }

      node = node.next;
    }

    return false;
  }

  findNode = value => {
    let node = this.head;

    while (node) {
      if (node.value === value) {
        return node;
      }

      node = node.next;
    }

    return null;
  }

  removeNode = delNode => {
    if (delNode === this.head) {
      this.head = delNode.next;

      delNode.next = null;

      this.length--;
      return true;
    }

    let node = this.head;

    while (node) {
      if (node.next = delNode) {
        if (delNode === this.tail) {
          this.tail = node;
          node.next = null;
        } else {
          node.next = delNode.next;
          delNode.next = null;
        }

        this.length--;
        return true;
      }

      node = node.next;
    }

    return false;
  }

  forEach = callBack => {
    let node = this.head;

    while (node) {
      callBack(node);

      node = node.next;
    }
  }

  print = () => {
    let values = [];

    this.forEach(node => {
      values.push(node.value);
    })

    console.log(values.join(','));
  }
}

module.exports = SinglyLinkedList;
/*
let myList = new SinglyLinkedList(10);
myList.insertAfter(myList.head,20);
myList.insertAfter(myList.findNode(10),15);
myList.insertBefore(myList.findNode(20),18);
console.log(myList.print());
myList.removeAfter(myList.findNode(15));
console.log(myList.print());
myList.removeBefore(myList.findNode(20));
console.log(myList.print()); */