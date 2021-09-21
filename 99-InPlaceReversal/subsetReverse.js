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

const reverse_sub_list = function(head, p, q) {
  let cur = head;
  let prev;
  
  while (cur.value !== p) {
    prev = cur;
    cur = cur.next;
  }

  let prevP = prev;
  let pNode = cur;

  while (cur.value !== q) {
    let next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }

  let nextQ = cur.next;
  let qNode = cur;

  cur.next = prev;

  prevP.next = qNode;
  pNode.next = nextQ;

  return head;
};


head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)

console.log(`Nodes of original LinkedList are: ${head.get_list()}`)
console.log(`Nodes of reversed LinkedList are: ${reverse_sub_list(head, 2, 4).get_list()}`)
