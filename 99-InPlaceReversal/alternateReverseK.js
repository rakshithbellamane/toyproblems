class Node {
  constructor(value, next=null){
    this.value = value;
    this.next = next;
  }

  get_list() {
    let result = "";
    let temp = this;
    while (temp !== null) {
      result += temp.value + " ";
      temp = temp.next;
    }
    return result;
  }
};

const reverse = (start, end) => {
  let prev = null;
  let cur = start;

  while (cur !== end) {
    let next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }

  cur.next = prev;
}

const reverse_alternate_k_elements = function(head, k) {
  let count = 0;
  let start = head, prev = null;
  let node = head;
  let newHead = null;
  let tail = null;
  let prevReverse = false;

  while (node) {
    count++;
    prev = node;
    node = node.next;

    if (count === k) {
      if (!prevReverse) {
        reverse(start, prev);
      }
      prevReverse = !prevReverse;

      if (!newHead) newHead = prev;

      if (prevReverse) {
        if (tail) tail.next = prev;
        tail = start;
      } else {
        if (tail) tail.next = start;
        tail = prev;
      }

      count = 0;
      start = node;
    }
  }

  if (count < k && start) {
    reverse(start, prev);
    if (tail) tail.next = prev;
  }

  return newHead;
};



head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)
head.next.next.next.next.next.next = new Node(7)
head.next.next.next.next.next.next.next = new Node(8)

console.log(`Nodes of original LinkedList are: ${head.get_list()}`)
console.log(`Nodes of reversed LinkedList are: ${reverse_alternate_k_elements(head, 3).get_list()}`)
