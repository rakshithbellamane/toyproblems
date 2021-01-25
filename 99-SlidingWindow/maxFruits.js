const findMaxFruits = (fruits, K) => {
  let baskets = {};
  let start = 0;

  let maxFruits = 0;
  for (let end=0; end<fruits.length; end++) {
    if (!baskets[fruits[end]])
      baskets[fruits[end]] = 0;
    
    baskets[fruits[end]]++;

    if (Object.keys(baskets).length > K) {
      let removeFruit = fruits[start];
      let nextFruit = removeFruit;

      while (baskets[removeFruit]) {
        baskets[nextFruit]--;
        if (!baskets[nextFruit]) delete baskets[nextFruit];
        nextFruit = fruits[start++];
      }
    }

    maxFruits = Math.max(maxFruits, end-start+1);
  }

  return maxFruits;
}

let fruits = [1,2,3,1,3];
K = 2;
console.log(`findMaxFruits ${findMaxFruits(fruits, K)}`);