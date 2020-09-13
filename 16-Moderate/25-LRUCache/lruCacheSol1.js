// class to store individual value/ node in the linked list
class Node {
  value;
  prev;
  next;

  constructor (val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

// doubly linked list that stores the values of the cache
class List {
  head;
  tail;

  // when the cache is initialized, it creates an empty list
  constructor () {
    this.head = null;
    this.tail = null;
  }

  // adds a node to the list
  addNode (val) {
    // create a node for the given value
    let node = new Node(val);

    // if this is the first node in the list, assign the head to the node
    if (this.head === null) this.head = node;
    
    // if there is a tail
    if (this.tail) {
      // make the current tail as the new node's prev
      node.prev = this.tail;
      // makde the current tail's next as the new node
      this.tail.next = node;
    }
    
    // in all cases, set the tail to new node
    this.tail = node;

    // return the newly created node so that its reference can be stored in the storage of the cache
    return node;
  }

  // function to remove a given node.
  removeNode (node) {
    // get the previous and next nodes of the given node;
    let prevNode = node.prev;
    let nextNode = node.next;

    // if the list is empty, return null
    if (this.head === null || this.tail === null || node === null) return null;

    // if there are previous or next nodes
    // make the prevNode's next to point to the next node of the node to be removed
    if (prevNode) prevNode.next = nextNode;
    // make the next node's prev to point to the node to be removed's prev node;
    if (nextNode) nextNode.prev = prevNode;

    // if the node to be removed is the tail
    if (node === this.tail) {
      // and if there is a previous node, then set the tail to the prev node;
      if (prevNode) this.tail = prevNode;
      else this.tail = null;
    }

    // if the node to be removed is the head
    if (node === this.head) {
      // and if there is a next node, then set the head to the next node
      if (nextNode) this.head = nextNode;
      // else set the head to null
      else this.head = null;
    }
  }

  // function to print all the node values in the list
  printNodes () {
    let node = this.head;
    while (node !== null) {
      console.log(node.value);
      node = node.next;
    }
  }
}


// class to represent the least recently used cache
class Cache {
  // stores the key and reference to the node in the list that stores the value
  storage = {};
  // doubly linked list to store the values
  list;
  // current count of items in the cache
  count;
  // max size of the cache
  maxSize;

  constructor (size) {
    this.count = 0;
    this.maxSize = size;
    // create an empty list
    this.list = new List()
  }

  // adds a key value pair to the cache
  addItem (key, value) {
    // if the cache already has max items
    if (this.count >= this.maxSize) {
      // remove the least recently used item which is the item in the head of the list
      this.list.removeNode(this.list.head);
      // decrement the count
      this.count--;
    }

    // add the new value to the list
    let node = this.list.addNode(value);
    // add the key to the cache with the value pointing to the node in the list
    this.storage[key] = node;
    // increment the count
    this.count++;
  }

  // function to find an item in the cache given a key
  findItem (key) {
    // if there is no key in the storage return null.
    if (!this.storage[key]) return null;

    // get the reference to the node that stores the value in the list
    let node = this.storage[key];
    // we need to move the node to the end of the list
    // start by removing the node
    this.list.removeNode(node);
    // then add the node which puts the node at the end of the list
    this.list.addNode(node.value);

    return node.value;
  }

  printValues () {
    this.list.printNodes();
  }
}

let lruCache = new Cache(5);
lruCache.addItem(1,'a');
lruCache.addItem(2,'b');
lruCache.addItem(3,'c');
lruCache.addItem(4,'d');
lruCache.addItem(5,'e');

lruCache.printValues();

console.log(lruCache.findItem(2));

lruCache.printValues();

lruCache.addItem('6','f');

lruCache.printValues();