class OnlineBookReader {
  library;
  display;
  activeUser;
  activeBook;

  constructor (inputLibrary, inputDisplay) {
    this.library = inputLibrary;
    this.display = inputDisplay;
    this.activeBook = null;
    this.activeUser = null;
  }

  setActiveBook (book) {
    if (this.library.findBook(book) && !this.activeBook) {
      this.activeBook = book;
      this.display.displayBook(book);
    }
  }

  setActiveUser (user) {
    if (!this.activeUser) {
      this.activeUser = user;
      this.display.displayUser(user);
    }
  }

  removeActiveBookAndUser (book, user) {
    if (this.activeUser === user && this.activeBook === book) {
      this.activeUser = null;
      this.activeBook = null;
      this.display.stopDisplayBook(book);
      this.display.stopDisplayUser(user);
    }
  }
}

class Library {
  books = {};

  addBook (book) {
    if (!this.books[book.id]) this.books[book.id] = book;
  }

  findBook (book) {

  }

  removeBook (book) {

  }
}

class Book {
  id;
  numPages;
  details;
}

class Display {
  displayBook (book) {

  }

  displayUser (user) {

  }

  turnPageForward () {

  }

  turnPageBackward () {

  }

  refreshPage () {

  }

  refreshUser () {
    
  }
}

class User {

}