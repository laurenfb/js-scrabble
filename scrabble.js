var CONSTANTS = require('./scrabble_constants');

var Scrabble = function() {};

// this is a thing to copy from
Scrabble.prototype.helloWorld = function() {
  return 'hello world!';
};

// add score method to Scrabble
Scrabble.prototype.score = function(word){
  word = word.toUpperCase();
  var total = 0;
  for (let char of word) {
    total += CONSTANTS.SCORES[char]
  };
  if (word.length >= 7) {
    total += 50
  };
  return total;
}

Scrabble.prototype.highestScoreFrom = function(arrayOfWords) {
  var highestWord = null;
  var highestWordScore = null;
  var scoreArray = [];

// iterate through words, score them all
  for (let word of arrayOfWords) {
    scoreArray.push(Scrabble.prototype.score(word));
  };

// iterate through scores, find best based on conditional
  for (var i = 0; i < scoreArray.length; i++) {
    if (scoreArray[i] > highestWordScore) {
      highestWordScore = scoreArray[i];
      highestWord = arrayOfWords[i];
    } else if (scoreArray[i] == highestWordScore) {
      if (highestWord.length < 7 && arrayOfWords[i].length >= 7) {
        highestWordScore = scoreArray[i]
        highestWord = arrayOfWords[i];
      };
    };

  };
  return highestWord
};

// new scrabble
var scrabble = new Scrabble()

// testing for score fx// regular word
console.log("Score for 'word' is: " + scrabble.score("word"))
// bingo word (7+ letters)
console.log("Score for 'foooooooblah' is: " + scrabble.score("foooooooblah"))

// testing highestScoreFrom fx
console.log("hiii: " + scrabble.score("hiii") + ", bloop: " + scrabble.score("bloop") + ", cat: " + scrabble.score("cat") )
console.log("highest score word is: " + scrabble.highestScoreFrom(["hiii", "bloop", "cat"]))

// test that in the case of an equal score, the word that is 7 letters or greater should be the winner
console.log("zzzzzz: " + scrabble.score("zzzzzz") + ", iiiiiif: " + scrabble.score("iiiiiif"))
console.log("highest score word is: " + scrabble.highestScoreFrom(["zzzzzz", "iiiiiif"]))

// test that in the case of an equal score where none is 7 letters, the first should be the winner
console.log("aaaaaa: " + scrabble.score("aaaaaa") + ", iiiiii: " + scrabble.score("iiiiii"))
console.log("highest score word is: " + scrabble.highestScoreFrom(["aaaaaa", "iiiiii"])) 


// export this file as a module
module.exports = Scrabble;
