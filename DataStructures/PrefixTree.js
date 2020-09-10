class PrefixTree {
  letter = null;
  children = {};
  isWord = false;


  addWord (word) {
    let parent = this;
    let node = null;

    // loop through each char in the word
    for (let i=0; i<word.length; i++) {
      let letter = word[i];

      // if the parent already has a children with the letter make that child as the parent and follow that path
      if (parent.children[letter]) {
        parent = parent.children[letter];
      } else {
        // create a new node/tree for the letter and make the node as the child of the parent
        node = new PrefixTree();
        node.letter = letter;
        parent.children[letter] = node;
        parent = node;
      }
    }

    // finally at the end of the word, mark the last node for the word as isWord = true;
    node.isWord = true;
  }

  hasWord (word) {
    let parent = this;
    let node = null;
    let i;

    // loop through each char in the given word
    for (i=0; i<word.length; i++) {
      let letter = word[i];
      // see if there is a child for the letter
      node = parent.children[letter];

      // if yes, make it the parent and follow down the tree
      if (node) {
        parent = node;
      } else {
        // else there is no word. Break 
        break;
      }
    }

    // finally check if i is same as word's length which means we found the entire word in the tree
    return (i === word.length) ? true : false;
  }

  // this function finds all the words in the Trie. This function is recursive.
  findAllWords (prefix, words) {
    // if the current node has a word marker, then push the prefix which will be a word
    if (this.isWord) {
      words.push(prefix);
    }  
    
    // for each letter/child of the parent, follow the paths adding the letter to the prefix
    Object.keys(this.children).forEach(letter => {
      this.children[letter].findAllWords(prefix+letter, words);
    });
  }

  // this function finds all the words that starts with the given prefix
  findWordsWithPrefix (prefix) {
    let words = [];
    let parent = this;
    let node = null;
    let i;

    // loop through each letter in the prefix and follow the path for the prefix if it exists.
    for (i=0; i< prefix.length; i++) {
      let letter = prefix[i];
      node = parent.children[letter];

      if (node) {
        parent = node;
      } else {
        break;
      }
    }

    // if i = length of the prefix, then we have reached the node corresponding to the prefix. After this we need to find all the words from there
    if (i === prefix.length) {
      parent.findAllWords(prefix, words);
    }

    return words;
  }

  remove (word) {
    let parent = this;
    let node = null;
    let chain = [];
    let i;

    // create the chain of nodes for the word
    for (i=0; i<word.length; i++) {
      let letter = word[i];

      if (parent.children[letter]) {
        parent = parent.children[letter];
        chain.push(parent);
      }
    }

    // if we have found the word, start moving up the chain deleting or updating the nodes
    if (i === word.length) {
      node = chain.pop();
      parent = chain.pop();

      // if the node has NO children then delete the node
      if (Object.keys(node.children).length === 0) {
        delete parent.children[node.letter];
      } else {
        // if it has children, then just mark that it is not a word anymore and return
        node.isWord = false;
        return;
      }

      // move up the chain
      while (chain.length > 0) {
        node = parent;
        parent = chain.pop();

        // if the node has NO children then delete the node 
        if (Object.keys(node.children).length === 0) {
          delete parent.children[node.letter];
        } else {
          // if the node has children, then just return;
          return;
        }
      }
    }
  }
}

let myTrie = new PrefixTree();
myTrie.addWord('MAP');
myTrie.addWord('MAKE');
myTrie.addWord('MAN');
myTrie.addWord('MAKER');
myTrie.addWord('MAKES');

console.log(myTrie.hasWord('MAKE'));
console.log(myTrie.hasWord('MAP'));
console.log(myTrie.hasWord('RAK'));

console.log(myTrie.findWordsWithPrefix('MA'));

myTrie.remove('MAKE');
console.log(myTrie.findWordsWithPrefix('MA'));