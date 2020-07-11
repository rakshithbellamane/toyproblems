class Card {
  static suitTypes = {
    CLUB: 'club',
    DIAMOND: 'diamond',
    HEART: 'heart',
    SPADE: 'spade',
    SPECIAL: 'special',
  };

  suit;
  faceType;
  value;

  constructor (inputSuit, inputValue, inputFaceType=null) {
    if (!Card.suitTypes[inputSuit] || !inputValue) {
      throw new Error('Invalid Card Suit or Value');
    }
    
    this.suit = inputSuit;
    this.value = inputValue;
    this.faceType = inputFaceType;
  }
}

class Deck {
  availableCards = [];
  dealtCards = []

  constructor () {
    for (let suit in Card.suitTypes) {
      for (let cardValue=2; cardValue<=10; cardValue++) {
        this.availableCards.push(new Card(suit, cardValue));
      }

      this.availableCards.push(new Card(suit, 10, 'jack'));
      this.availableCards.push(new Card(suit, 10, 'queen'));
      this.availableCards.push(new Card(suit, 10, 'king'));
      this.availableCards.push(new Card(suit, 1, 'ace'));
    }

    this.availableCards.push(new Card('special', 0, 'jocker'));
    this.availableCards.push(new Card('special', 0, 'jocker'));
  }

  shuffle () {

  }

  dealCard () {
    if (this.availableCards.length > 0) {
      let card = this.availableCards.pop();
      this.dealtCards.push(card);

      return card;
    } else {
      throw new Error('no more cards in the deck');
    }
  }

  dealHand (numCards) {

  }
}

class Hand {
  cards = [];

  constructor (inputCards) {
    inputCards.forEach(card => this.cards.push(card));
  }

  score () {
    let score = 0;
    this.cards.forEach(card => score += card.value);

    return score;
  }

  addCard (card) {
    card && this.cards.push(card);
  }

  removeCard () {

  }
}

class BackJackHand extends Hand {
  constructor (inputCards) {
    super(inputCards);
  }

  score() {
    let minScore;
    let maxScore;

    this.cards.forEach(card => {
      if (card.faceType === 'ace') {
        minScore += 1;
        maxScore += 11;
      } else {
        minScore += card.value;
        maxScore += card.value;
      }
    })

    return maxScore <= 21 ? maxScore : minScore;
  }

  isBusted () {
    return this.score() > 21;
  }

  isBackJack () {
    return this.score() === 21;
  }
}