var CONSTANTS = require('./scrabble_constants');

// constructor!
var Scrabble = function() {};

// this is a thing to copy from
Scrabble.helloWorld = function() {
  return 'hello world!';
};

// add score method to Scrabble
Scrabble.score = function(word){
  if (typeof(word) == 'string') {
    word = word.toUpperCase();
    var total = 0;
    for (let char of word) {
      total += CONSTANTS.SCORES[char]
    };
    if (word.length >= 7) {
      total += 50
    };
    return total;
  } else {
    return false;
  };

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
      if (highestWord.length > arrayOfWords[i].length) {
        highestWord = arrayOfWords[i];
      } else if (highestWord.length < 7 && arrayOfWords[i].length >= 7) {
        highestWordScore = scoreArray[i]
        highestWord = arrayOfWords[i];
      };
    };

  };
  return highestWord
};

// hashtag test-driven development. check out /spec folder to see testing on this module.
// export this file as a module
module.exports = Scrabble;
