var CONSTANTS = require('./scrabble_constants');

var Scrabble = function() {};

// this is a thing to copy from
Scrabble.prototype.helloWorld = function() {
  return 'hello world!';
};

// add score method to Scrabble
Scrabble.prototype.score = function(word){
  word = word.toUpperCase();
  total = 0;
  for (let char of word) {
    total += CONSTANTS.SCORES[char]
  };
  if (word.length >= 7) {
    total += 50
  };
  return total;
}


// testing for score functions
var scrabble = new Scrabble()

// regular word
console.log("Score for 'word' is: " + scrabble.score("word"))
// bingo word (7+ letters)
console.log("Score for 'foooooooblah' is: " + scrabble.score("foooooooblah"))


// export this file as a module
module.exports = Scrabble;
