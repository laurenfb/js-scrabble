var CONSTANTS = require('./scrabble_constants');

// constructor!
var Scrabble = function() {};

// this is a thing to copy from
Scrabble.helloWorld = function() {
  return 'hello world!';
};

// add score method to Scrabble
Scrabble.score = function(word){
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

Scrabble.highestScoreFrom = function(arrayOfWords) {
  var highestWord = null;
  var highestWordScore = null;
  var scoreArray = [];

// iterate through words, score them all
  for (let word of arrayOfWords) {
    scoreArray.push(Scrabble.score(word));
  };

// iterate through scores, find best based on conditional
  for (var i = 0; i < scoreArray.length; i++) {
    if (scoreArray[i] > highestWordScore) {
      highestWordScore = scoreArray[i];
      highestWord = arrayOfWords[i];
    }
    // if the scores are tied, check to see if one of the words is longer than 7 letters. if neither is, continue on as if nothing happened (this will effectively choose the first tied score to be the winner) //
    else if (scoreArray[i] == highestWordScore) {
      if (highestWord.length < 7 && arrayOfWords[i].length >= 7) {
        highestWordScore = scoreArray[i]
        highestWord = arrayOfWords[i];
      };
    };

  };
  return highestWord
};

// console.log(Scrabble.helloWorld())
// // testing for score fx// regular word
// console.log("Score for 'word' is: " + Scrabble.score("word"))
// // bingo word (7+ letters)
// console.log("Score for 'foooooooblah' is: " + Scrabble.score("foooooooblah"))
//
// // testing highestScoreFrom fx
// console.log("hiii: " + Scrabble.score("hiii") + ", bloop: " + Scrabble.score("bloop") + ", cat: " + Scrabble.score("cat") )
// console.log("highest score word is: " + Scrabble.highestScoreFrom(["hiii", "bloop", "cat"]))
//
// // test that in the case of an equal score, the word that is 7 letters or greater should be the winner
// console.log("zzzzzz: " + Scrabble.score("zzzzzz") + ", iiiiiif: " + Scrabble.score("iiiiiif"))
// console.log("highest score word is: " + Scrabble.highestScoreFrom(["zzzzzz", "iiiiiif"]))
//
// // test that in the case of an equal score where none is 7 letters, the first should be the winner
// console.log("aaaaaa: " + Scrabble.score("aaaaaa") + ", iiiiii: " + Scrabble.score("iiiiii"))
// console.log("highest score word is: " + Scrabble.highestScoreFrom(["aaaaaa", "iiiiii"]))
// //
//
// export this file as a module
module.exports = Scrabble;
