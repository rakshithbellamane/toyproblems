class CircularArray {
  arrayLength = 6;
  items = [];
  head = 0;

  convert (index) {
    let rotatedIndex = index % this.arrayLength;

    return rotatedIndex;
  }

  add (index, item) {
    this.items[this.convert(index)] = item;
  }

  get (index) {
    return this.items[this.convert(index)];
  }
}

let myArr = new CircularArray();
myArr.add(1,'a');
myArr.add(2,'b');
myArr.add(3,'c');
myArr.add(4,'d');
myArr.add(5,'e');
myArr.add(6,'f');
myArr.add(7,'g');

console.log(myArr);