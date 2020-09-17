const shuffle = (cards, i=0) => {
  // base case, we have shuffled all cards
  if (i >= cards.length) return cards;

  // get a random card from the shuffled cards
  let k = Math.floor(Math.random()*i);

  // swap the card with the ith card
  let temp = cards[k];
  cards[k] = cards[i];
  cards[i] = temp;

  // continue shuffling
  return shuffle(cards,i+1);
}

let cards = [1,2,3,4,5];
console.log(shuffle(cards));