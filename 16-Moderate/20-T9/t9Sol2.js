class PrefixTree {
  letter;
  children = {};
  isWord = false;

  static map = {
    '0': [],
    '1': [],
    '2': ['a','b','c'],
    '3': ['d','e','f'],
    '4': ['g','h','i'],
    '5': ['j','k','l'],
    '6': ['m','n','o'],
    '7': ['p','q','r','s'],
    '8': ['t','u','v'],
    '9': ['w','x','y','z']
  };

  addWord (word) {
    let parent = this;
    let node;

    for (let i=0; i<word.length; i++) {
      let letter = word[i];

      if (parent.children[letter]) {
        parent = parent.children[letter];
        node = parent;
      } else {
        node = new PrefixTree();
        node.length = letter;
        parent.children[letter] = node;
        parent = node;
      }
    }

    node.isWord = true;
  }

  findWords (input, words=[], prefix='') {
    // loop through each digit in the input
    for (let i=0; i<input.length; i++) {
      // for each letter for the digit, check if there is a word with that letter
      PrefixTree.map[input[i]].forEach(letter => {
        let parent = this;
        // if there is a word with that letter, follow down that path
        if (parent.children[letter]) {
          let node = parent.children[letter];

          // if the input's length is 1 which means we are processing the last char, then check if node corresponding to the letter is a word
          // if yes, push the word
          if (input.length === 1) {
            if (node.isWord) words.push(prefix+letter);
            return;
          }

          // if the input has more digits, then process the next digit
          parent = node;
          parent.findWords(input.substring(i+1), words, prefix+letter);
        }
      });
    }

    return words;
  }
}

let myTrie = new PrefixTree();
myTrie.addWord('tree');
myTrie.addWord('trap');
myTrie.addWord('mad');
myTrie.addWord('tred');
myTrie.addWord('fish');
myTrie.addWord('used');

console.log(myTrie.findWords('8733'));
