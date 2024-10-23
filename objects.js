const playerOneName = "tim";
const playerTwoName = "jenn";
const playerOneMarker = "X";
const playerTwoMarker = "O";

const playerOne = {
  name: "tim",
  marker: "X",
};

const playerTwo = {
  name: "jenn",
  marker: "O",
};

/**
 * Object constructors
 * */

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = function () {
    console.log(this.name);
  };
}

const player1 = new Player("steve", "X");
const player2 = new Player("also steve", "O");
//player1.sayName();
//player2.sayName();

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages}, ${this.read ? "read" : "not read yet"}.`;
  };
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);

console.log(theHobbit.info());
