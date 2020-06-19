class HashTable {
  size = 100;
  storage = [];
  count = 0;
  
  constructor(tableSize) {
    if (tableSize > 0) this.size = tableSize;
  }

  simpleHash = string => {
    let hash = 0;

    for (let index=0; index<string.lenght; index++) {
      hash += string.charCodeAt(index) * (index+1);
    }

    return hash % this.size;
  }

  find = key => {
    let hash = this.simpleHash(key, this.size);
    this.storage[hash] = this.storage[hash] || [];
    let bucket = this.storage[hash];

    let match;
    let matchIndex;
    bucket.forEach((item, index) => {
      if (item.hasOwnProperty(key)) {
        match = item;
        matchIndex = index;
      }
    });

    return {
      match,
      matchIndex,
      bucket
    };
  }

  has = key => {
    return !!this.find(key).match;
  }

  resize = newSize => {
    let oldStorage = this.storage;

    this.size = newSize;
    this.count = 0;
    this.storage = [];

    oldStorage.forEach(bucket => {
      bucket.forEach(item => {
        let key = Object.keys(item)[0];
        let value = item[key];
        this.set(key, value);
      })
    })
  }

  set = (key, value) => {
    let {match, matchIndex, bucket} = this.find(key);

    if (match) { 
      match[key] = value; 
    } else {
      let newItem = {};
      newItem[key] = value;
      this.count++;
      
      bucket.push(newItem);

      if (this.count > .75 * this.size) {
        this.resize(2*this.size);
      }
    }
  }

  get = key => {
    let {match} = this.find(key);

    return match;
  }

  forEach = callBack => {
    this.storage.forEach(bucket => {
      bucket.forEach(item => {
        callBack(item);
      })
    })
  }
}

module.exports = HashTable;