class Node {
  val;
  next;

  constructor (value, nextNode=null){
    this.val = value;
    this.next = nextNode;
  }
}

const reverse = head => {
  let prev = null;

  while (head) {
    nextNode = head.next;
    head.next = prev;
    prev = head;
    head = nextNode;
  }

  return prev;
}

const isPalindrome = head => {
  let slow=head;
  let fast=head;

  while(fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let mid = slow;

  let reverseHead = reverse(slow.next);

  let node1 = head;
  let node2 = reverseHead;

  let palin = true;
  while (node1 && node2) {
    if (node1.val !== node2.val) {
      palin = false;
      break;
    }
    node1 = node1.next;
    node2 = node2.next;
  }

  mid.next = reverse(reverseHead);

  return palin;
} 

const head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(6);
head.next.next.next.next = new Node(4);
head.next.next.next.next.next = new Node(2);

console.log(`isPalindrome ${isPalindrome(head)}`);