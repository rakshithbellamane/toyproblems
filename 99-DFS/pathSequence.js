class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null; 
  }
};



// const find_path = function(root, sequence, path=[]) {
//   path.push(root.value);

//   if (!root.left && !root.right) {
//     if (sequence.length === path.length) {
//       let result = sequence.join('') === path.join('');
      
//       path.pop();
//       return result;
//     } 
//   }

//   let leftSeq = root.left ? find_path(root.left, sequence, path) : false;
//   let rightSeq = root.right ? find_path(root.right, sequence, path) : false;
  
//   path.pop(root.val);

//   return leftSeq || rightSeq;
// };

const find_path = function(root, sequence, index=0) {
  if (root === null) return sequence.length === 0;

  if (index >= sequence.length || sequence[index] !== root.value) return false;

  if (!root.left && !root.right && index === sequence.length-1) return true;

  return find_path(root.left, sequence, index+1) || find_path(root.right, sequence, index+1);
};



var root = new TreeNode(1)
root.left = new TreeNode(0)
root.right = new TreeNode(1)
root.left.left = new TreeNode(1)
root.right.left = new TreeNode(6)
root.right.right = new TreeNode(5)

console.log(`Tree has path sequence: ${find_path(root, [1, 0, 0])}`)
console.log(`Tree has path sequence: ${find_path(root, [1, 1, 6])}`)
