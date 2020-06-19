class PrefixTree {
  letter = null;
  children = {};
  isWord = false;

  addWord (word) {
    let parent = this;
    let node = null;

    for (let i=0; i<word.length; i++) {
      let letter = word[i];

      if (parent.children[letter]) {
        parent = parent.children[letter];
      } else {
        node = new PrefixTree();
        node.letter = letter;
        parent.children[letter] = node;
        parent = node;
      }
    }
    node.isWord = true;
  }

  hasWord (word) {
    let parent = this;
    let node = null;
    let i;

    for (i=0; i<word.length; i++) {
      let letter = word[i];
      node = parent.children[letter];

      if (node) {
        parent = node;
      } else {
        break;
      }
    }

    return (i === word.length) ? true : false;
  }

  findAllWords (prefix, words) {
    if (this.isWord) {
      words.push(prefix);
    }  
    
    Object.keys(this.children).forEach(letter => {
      this.children[letter].findAllWords(prefix+letter, words);
    });
  }

  findWordsWithPrefix (prefix) {
    let words = [];
    let parent = this;
    let node = null;
    let i;

    for (i=0; i< prefix.length; i++) {
      let letter = prefix[i];
      node = parent.children[letter];

      if (node) {
        parent = node;
      } else {
        break;
      }
    }

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