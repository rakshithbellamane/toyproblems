const multiply = (smaller, bigger) => {
  if (smaller === 0) return 0;
  if (smaller === 1) return bigger;

  let s = smaller >> 1;
  let halfProd = multiply(s, bigger);

  if (smaller % 2 === 0) {
    return halfProd + halfProd;
  } else {
    return halfProd + halfProd + bigger;
  }
}

console.log(multiply(6,9));