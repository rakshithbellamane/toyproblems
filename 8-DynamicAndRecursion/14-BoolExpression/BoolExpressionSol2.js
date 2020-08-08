const expr = '1^0|0|1';

const countEval = (expr, result, memo={}) => {
  if (expr.length === 0) return 0;
  if (memo[expr+result]) return memo[expr+result];
  if (expr.length === 1) return !!(parseInt(expr)) === result ? 1 : 0;

  let ways = 0;

  for (let i=1; i<expr.length; i+=2) {
    const operator = expr[i];
    let leftExpr = expr.slice(0,i);
    let rightExpr = expr.slice(i+1);

    let leftTrue = countEval(leftExpr, true);
    let leftFalse = countEval(leftExpr, false);
    let rightTrue = countEval(rightExpr, true);
    let rightFalse = countEval(rightExpr, false);
    let total = (leftTrue + leftFalse) * (rightTrue + rightFalse);

    let totalTrue = 0;
    if (operator === '&') {
      totalTrue = leftTrue * rightTrue;
    } else if (operator === '|') {
      totalTrue = (leftTrue * rightFalse) + (leftFalse * rightTrue) + (leftTrue * rightTrue);
    } else if (operator === '^') {
      totalTrue = (leftTrue * rightFalse) + (leftFalse * rightTrue);
    }

    ways += result === true ? totalTrue : total - totalTrue;
  }

  memo[expr+result] = ways;
  return ways;
}

console.log(countEval(expr, false));