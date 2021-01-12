class Node {
  value;
  next;

  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

// linked list class
class LinkedList {
  head=null;
  tail=null;

  // add a value to the end of the linked list
  add (val) {
    let newNode = new Node(val);
    if (!this.head) this.head = newNode;
    if (this.tail) this.tail.next = newNode;
    this.tail = newNode;
  }

  // add a value to the begining of the linked list
  addFirst (val) {
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
  }

  // form an array of all the values in a linked list
  collapse () {
    let words = [];
    let node = this.head;
    while(node) {
      words.push(node.value);
      node = node.next;
    }

    return words;
  }
}

class BFSData {
  toVisit;
  visited;
  path;

  constructor(root) {
    this.toVisit = [root];
    this.visited = {};
    this.path = new LinkedList();
    this.path.add(root);
  }

  isFinished () {
    return this.toVisit.length === 0;
  }
}

// setup a hash map of all possible 1 char diff wild card to the words that it corresponds to
const setupwildCardToWordListMap = (words) => {
  let wildCardToWordList = {};
  words.forEach(word => {
    for(let i=0;i<word.length;i++) {
      let wildCard = word.substring(0,i)+'_'+word.substring(i+1);
      if (wildCardToWordList[wildCard]) wildCardToWordList[wildCard].push(word);
      else wildCardToWordList[wildCard] = [word];
    }
  });

  return wildCardToWordList;
}

const searchLevel = (wildCardToWordList, sourceData, destData) => {
  let count = sourceData.toVisit.length;
  for (let i=0; i<count; i++) {
    let word = sourceData.toVisit.shift();
    
    if (destData.visited[word]) return word;

    let words = [];
    for (let j=0; j<word.length; j++) {
      let wildCard = word.substring(0,j)+'_'+word.substring(j+1);
      wildCardToWordList[wildCard].forEach(newWord => {if (newWord !== word) words.push(newWord)});
    }

    words.forEach(word => {
      if (!sourceData.visited[word])
        sourceData.toVisit.push(word);
        sourceData.path.add(word);
        sourceData.visited[word] = true;
    });
  }
}

const mergePaths = (sourceData, destData, collision) => {
  let combinedPath = [];
  let node = sourceData.path.head;
  while (node.value !== collision) {
    combinedPath.push(node.value);
    node = node.next;
  }
  combinedPath.push(collision);
  node = destData.path.head;
  while (node.value !== collision) {
    combinedPath.push(node.value);
    node = node.next;
  }

  return combinedPath;
}

const wordTransform = (start, stop, words) => {
  let wildCardToWordList = setupwildCardToWordListMap(words);
  let sourceData = new BFSData(start);
  let destData = new BFSData(stop);

  while (!sourceData.isFinished() && !destData.isFinished()) {
    let collision = searchLevel(wildCardToWordList, sourceData, destData);

    if (collision) return mergePaths(sourceData, destData, collision);

    collision = searchLevel(wildCardToWordList, destData, sourceData);

    if (collision) return mergePaths(sourceData, destData, collision);
  }

  return null;
}



let words = ['abc','abd','bdc','dba','efg','afe','ebc','efc'];
let start = 'abc';
let stop = 'efg';
console.log(wordTransform(start, stop, words));