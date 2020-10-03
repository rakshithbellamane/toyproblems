class Trie {
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
        node = new Trie();
        node.letter = letter;
        parent.children[letter] = node;
        parent = node;
      }
    }

    // finally at the end of the word, mark the last node for the word as isWord = true;
    node.isWord = true;
  }

  hasWord (word) {
    // loop through each char in the word and see if it exists
    let parent = this;
    for(let i=0; i<word.length; i++) {
      let letter = word[i];
      if (parent.children[letter]) parent = parent.children[letter];
      else return false;
    };

    // if the control reaches here, then either given word was fully found in the tree. Either it is a word or part of word
    if (parent.isWord) return 'word';
    else return 'wordPart'
  }
}

const searchAll = (big, myTrie) => {
  let i = 0, j=0;
  let locations = {};

  // loop through each char in the given big word
  let parent = myTrie;
  while (i < big.length) {
    // check if there is a word that begins with i
    let iLetter = big[i];
    let jLetter = big[j];
    if (myTrie.children[iLetter] && parent.children[jLetter]) {
      // if yes, then continue searching down the trie for the next chars starting from i
      let node = parent.children[jLetter];
      // if at each node, if it is a word, then push it into the locations
      if (node.isWord) {
        let word = big.substring(i,j+1);
        if (locations[word]) locations[word].push(i);
        else locations[word] = [i];
      }
      parent = node;
      j++;
    } else {
    // if no, then increment i and start searching for words begining with i+1
      parent = myTrie;
      i++;
      j=i;
    }
  }

  return locations;
}

let big = 'mississippi';
let small = ['i','is','pp','ms'];
let myTrie = new Trie();
small.forEach(word => myTrie.addWord(word));

console.log(searchAll(big,myTrie));