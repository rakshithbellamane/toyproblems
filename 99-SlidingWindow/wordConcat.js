const findStartIndex = (str, words) => {
  let map = {};
  for (let i=0; i<words.length; i++) {
    if (!map[words[i]])
      map[words[i]] = 1;
  }

  let start = 0;
  let indices = [];

  for (let end=0; end<str.length; end++) {
    
  }
}

let str = 'catfoxcat';
let words = ['cat','fox'];
console.log(`starting indices ${findStartIndex(str, words)}`);