var CONSTANTS = require('./scrabble_constants');
var Scrabble = require('./scrabble')

// constructor!
var Player = function(name) {
  this._name = name;
  this._plays = [];
};

Player.prototype = {
  play: function(word){
    if (this.hasWon()) {
      return false;
    } else {
      this._plays.push(word);
    };
    return this._plays // currently returning the list of all plays
  }, //end of play fx

  totalScore: function(){
    var total = 0
    this._plays.forEach(function(play){
      total += Scrabble.score(play);
    });
    return total;
  }, //end of totalScore fx

  hasWon: function(){
    if (this.totalScore() >= 100) {
      return true;
    } else {
      return false;
    }
  }, //end of hasWon fx

  highestScoringWord: function(){
    return Scrabble.highestScoreFrom(this._plays);
  }, //end of highestscoringword fx

  highestWordScore: function(){
    return Scrabble.score(this.highestScoringWord());
  } //end of highestWordScore
}

// testing that we can instantiate a new Player
// var player = new Player("Edith");
// // test attributes
// // console.log("Player is: " + player._name);
// // console.log(player._name +  "'s plays: " + player._plays);
// // console.log(player._name +  "'s score: " + player._score);
// // console.log("Player won? " + player._won)
// // test whether we can play stuff
// player.play("cat")
// console.log(player._name +  "'s plays:" + player._plays);
// player.play("bloop");
// console.log(player._name +  "'s plays:" + player._plays);
// // test totalScore fx
// console.log("Total score: " + player.totalScore())
// // test hasWon fx
// console.log(player.hasWon() + ", player has not won.")
// player.play("xxxx")
// console.log("Total score: " + player.totalScore())
// player.play("xxxsssx")
// console.log(player._name +  "'s plays:" + player._plays);
// console.log("Total score: " + player.totalScore())
// console.log(player.hasWon() + ", player has won!")
// // test highest scoring word fx
// console.log("highest score word is " + player.highestScoringWord())
// // test highest word score fx
// console.log("score of that word is " + player.highestWordScore())


// export this file as a module
module.exports = Player;
