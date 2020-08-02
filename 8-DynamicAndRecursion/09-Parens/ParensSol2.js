const addParens = (list, leftRem, rightRem, str=[], index=0) => {
  // if the left or right paren count is less than 0, then just return
  if (leftRem < 0 || rightRem < 0) return;

  // if both left and right paren count is 0, then push completed and balanced str into the list
  if (leftRem === 0 && rightRem === 0) {
    list.push(str.join(''));
  } else {
    // add left paren and recurse
    str[index] = '(';
    addParens(list, leftRem - 1, rightRem, str, index+1);
    // add right paren and recurse only if 
      // index is > 0 (i.e don't introduce a ) paren at the start)
      // and there are more right parens than left parens. This will avoid situation like )(
    if (index > 0 && rightRem > leftRem) {
      str[index] = ')';
      addParens(list, leftRem, rightRem - 1, str, index + 1);
    }
  }

  return list;
}

console.log(addParens([], 3, 3));