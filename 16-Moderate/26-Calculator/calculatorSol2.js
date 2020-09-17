const calc = expr => {
  // two stacks to store numbers and operators
  let numStack = [];
  let opStack = [];

  // parse the expression
  let i=0;
  while (i < expr.length) {
    let processOp = false;
    // if element is an operator, determine if we need to process or push the operator to stack
    if (['+','-','*','/'].includes(expr[i])) {
      processOp = determineProcessOp(opStack, expr[i]);

      // if we need to process the operator already in opStack, 
      // then get the result and push the result into numStack
      if (processOp) numStack.push(processNum(numStack, opStack));

      // push the new operator into the opStack
      opStack.push(expr[i]);

      i++;
    } else {
    // if the element is a num, parse the num and push it into the numStack
      const parseNum = () => {
        // loop until we get an operator or the end of expr
        let num = '';
        while (i < expr.length && !['+','-','*','/'].includes(expr[i])) {
          num += expr[i];
          i++;
        }
        return parseFloat(num);
      }

      numStack.push(parseNum());
    }
  }

  // process the remaining numbers and operators in the stacks
  while (opStack.length > 0) {
    numStack.push(processNum(numStack, opStack));
  }

  // the last remaining num in the numStack will be the result
  return numStack.pop();
}

// function to determine whether the new operator has higher precedence than the top most operator in the opStack
// if lower, then we need to process the old operator in the stack
const determineProcessOp = (opStack, newOp) => {
  let processOp = false;
  // continue only if there are operators in the stack
  if (opStack.length > 0) {
    let oldOp = opStack[opStack.length-1];
    // if the old Op is * or /, then we need to process old op
    if (['*','/'].includes(oldOp)) processOp = true;
    // if the old Op is + or -, and the new Op is + or -, then we need to process the old Op
    if (['+','-'].includes(oldOp) && ['+','-'].includes(newOp)) processOp = true;
  }

  return processOp;
}

// function to process the numbers and operator in the stack
const processNum = (numStack, opStack) => {
  let op = opStack.pop();
  // first num popped with the 2nd operand and 2nd num popped will be the first operand.
  // the order matters for - & / operations.
  let num2 = numStack.pop();
  let num1 = numStack.pop();

  let result = 0;
  if (op === '+') result = num1 + num2;
  if (op === '-') result = num1 - num2;
  if (op === '*') result = num1 * num2;
  if (op === '/') result = num1 / num2; 

  return result;
}

// let expr = '2*3+5/6*3+15';
let expr = '2+2+3'
console.log(calc(expr));