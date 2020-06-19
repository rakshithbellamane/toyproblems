const Queue = require('../../DataStructures/Queue');

class AnimalShelter {
  dogQueue = new Queue();
  catQueue = new Queue();
  order = 1;

  addDog = dog => {
    this.dogQueue.add({
      value: dog,
      order: this.order++,
    })
  }

  addCat = cat => {
    this.catQueue.add({
      value: cat,
      order: this.order++,
    })
  }

  adoptDog = () => {
    return this.dogQueue.remove().value;
  }

  adoptCat = () => {
    return this.catQueue.remove().value;
  }

  adoptAny = () => {
    let dog = this.dogQueue.peek();
    let cat = this.catQueue.peek();

    if (dog.order < cat.order) {
      return this.dogQueue.remove().value;
    } else {
      return this.catQueue.remove().value;
    }
  }
}

let myAnimalShelter = new AnimalShelter();
myAnimalShelter.addCat('c1');
myAnimalShelter.addDog('d1');
myAnimalShelter.addCat('c2');
myAnimalShelter.addCat('c3');
myAnimalShelter.addDog('d2');
console.log(myAnimalShelter.dogQueue.print());
console.log(myAnimalShelter.catQueue.print());

console.log(myAnimalShelter.adoptDog());
console.log(myAnimalShelter.dogQueue.print());
console.log(myAnimalShelter.catQueue.print());

console.log(myAnimalShelter.adoptCat());
console.log(myAnimalShelter.dogQueue.print());
console.log(myAnimalShelter.catQueue.print());

console.log(myAnimalShelter.adoptAny());
console.log(myAnimalShelter.dogQueue.print());
console.log(myAnimalShelter.catQueue.print());