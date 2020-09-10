class T9 {
  words = {};
  map = {
    a: 2,
    b: 2,
    c: 2,
    d: 3,
    e: 3,
    f: 3,
    g: 4,
    h: 4,
    i: 4,
    j: 5,
    k: 5,
    l: 5,
    m: 6,
    n: 6,
    o: 6,
    p: 7,
    q: 7,
    r: 7,
    s: 7,
    t: 8,
    u: 8,
    v: 8,
    w: 9,
    x: 9,
    y: 9,
    z: 9
  }

  addWord (word) {
    let num = '';
    for (let i=0; i<word.length; i++) {
      num += this.map[word[i]];
    }

    // if the num already exists in the words map, add it to the list of words for the num
    if (this.words[num]) this.words[num].push(word);
    // else create a new map for the num & word
    else this.words[num] = [word];
  }

  findWords (num) {
    return this.words[num];
  }
}

let myT9 = new T9();
myT9.addWord('tree');
myT9.addWord('trap');
myT9.addWord('mad');
myT9.addWord('tred');
myT9.addWord('fish');
myT9.addWord('used');

console.log(myT9.findWords(8733));