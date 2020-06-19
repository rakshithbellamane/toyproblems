class BST {
  value;
  left;
  right;

  constructor (inputValue) {
    this.value = inputValue;
    this.left = null;
    this.right = null;
  }

  insert (inputValue) {
    if (inputValue <= this.value) {
      if (this.left) {
        this.left.insert(inputValue);
      } else {
        let child = new BST(inputValue);
        this.left = child;
      }
    } else {
      if (this.right) {
        this.right.insert(inputValue);
      } else {
        let child = new BST(inputValue);
        this.right = child;
      }
    }
  }

  weaveLists (list1, list2, prefix=[], result=[]) {
    if (list1.length === 0 || list2.length === 0) {
      result.push(prefix.concat(list1).concat(list2));
      return result;
    }
  
    prefix.push(list1.shift());
    this.weaveLists(list1, list2, prefix, result);
    list1.unshift(prefix.pop());
  
    prefix.push(list2.shift());
    this.weaveLists(list1, list2, prefix, result);
    list2.unshift(prefix.pop());

    return result;
  }

  getAllSequences () {
    let leftArr = this.left ? this.left.getAllSequences() : [];
    let rightArr = this.right ? this.right.getAllSequences() : [];
    let result = [];
    let weaved = [];

    if (leftArr.length === 0 && rightArr.length === 0) {
      result.push([this.value]);
    } else if (leftArr.length === 0) {
      for (let i=0; i<rightArr.length; i++) {
        weaved = this.weaveLists(leftArr, rightArr[i]); 
        weaved.forEach(list => {
          list.unshift(this.value);
          result.push(list);
        });
      }
    } else if (rightArr.length === 0) {
      for (let i=0; i<leftArr.length; i++) {
        weaved = this.weaveLists(leftArr[i], rightArr); 
        weaved.forEach(list => {
          list.unshift(this.value);
          result.push(list);
        });
      }
    } else {
      for (let i=0; i<leftArr.length; i++) {
        for (let j=0; j<rightArr.length; j++) {
          weaved = this.weaveLists(leftArr[i], rightArr[j]);
          weaved.forEach(list => {
            list.unshift(this.value);
            result.push(list);
          });
        }
      }
    }

    return result;
  }
}

let myBST = new BST(5);
myBST.insert(2);
myBST.insert(1);
myBST.insert(3);
myBST.insert(7);
myBST.insert(6);
myBST.insert(8);

console.log(myBST.getAllSequences());