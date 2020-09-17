// this is an iterative solution
const shuffle = cards => {
  // loop through each card
  for (let i=0; i< cards.length; i++) {
    // pick a random card between 0th & i-1th cards.
    // the reason that it is going to be between 0 & i-1 is that below random number generator generates random nums between 0 & i-1;
    let k = Math.floor(Math.random()*i);

    // swap the cards
    let temp = cards[k];
    cards[k] = cards[i];
    cards[i] = temp;
  }

  return cards;
}

let cards = [1,2,3,4,5];
console.log(shuffle(cards));