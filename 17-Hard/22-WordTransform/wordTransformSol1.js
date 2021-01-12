const wordTransform = (start, stop, words) => {
  let dict = setupDict(words);
  let visited = {};

  // return a path from start to stop if it exists
  return transform(visited, start, stop, dict);
}

// setup a hash map of words so that it is easy to see if a word exists.
const setupDict = (words) => {
  let dict = {};
  words.forEach(word => dict[word] = true);

  return dict;
}

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

// this function returns a list of all words that can be formed by replacing one char of the given word
const getWordsOneAway = word => {
  let words = [];
  // loop through each char in the word
  for (let i=0; i<word.length; i++) {
    // replace that char with chars a -> z to form a new word
    for (let c='a'.charCodeAt(); c<='z'.charCodeAt(); c++) {
      let w = word.substring(0,i)+String.fromCharCode(c)+word.substring(i+1);
      words.push(w);
    }
  }

  return words;
}

// this approach uses depth first search
const transform = (visited, startWord, stopWord, dict) => {
  // base case, if the startWord is same as stopWord, then return the path with the word
  if (startWord === stopWord) {
    let path = new LinkedList();
    path.add(startWord);
    return path;
  // else if either the start word has been visited or there is no such word in the dict, return null
  } else if (visited[startWord] || !dict[startWord]) return null;

  // so the start word is not the end word, but the word is in dict. So continue the one char replacement for the word
  visited[startWord] = true;

  // get all the words that are one char diff for the startWord
  let words = getWordsOneAway(startWord);

  // for each of the one char diff word, see if we have found the end word
  for (let i=0; i<words.length; i++) {
    let word = words[i];
    let path = transform(visited, word, stopWord, dict);

    // if we did find the endWord and hence a pathn, then add the startWord to the path and return the path
    // this would recursively return the full path
    if (path !== null) {
      path.addFirst(startWord);
      return path;
    }
  };

  return null;
}

let words = ['abc','abd','bdc','dba','efg','afe','ebc','efc'];
let start = 'abc';
let stop = 'efg';
console.log(wordTransform(start, stop, words).collapse());