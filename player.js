var CONSTANTS = require('./scrabble_constants');
var Scrabble = require('./scrabble')

// constructor!
var Player = function(name) {
  this._name = name;
  this._plays = [];
  this._score = 0
  this._won = false;
};

Player.prototype = {
  play: function(word){
    if (this._won) {
      return false;
    } else {
      this._plays.push(word);
      return this._plays;
    };
  }, //end of play fx
  totalScore(){
    var score = this._score
    this._plays.forEach(function(play){
      score += Scrabble.score(play);
    });
    this._score = score;
    return this._score;
  } //end of totalScore fx
}

// testing that we can instantiate a new Player
var player = new Player("Edith");
// test attributes
// console.log("Player is: " + player._name);
// console.log(player._name +  "'s plays: " + player._plays);
// console.log(player._name +  "'s score: " + player._score);
// console.log("Player won? " + player._won)
// test whether we can play stuff
player.play("cat")
console.log(player._name +  "'s plays:" + player._plays);
// test ability to set whether player has won
// player._won = true;
// console.log(player._won);
player.play("bloooop");
console.log(player._name +  "'s plays:" + player._plays);
// test totalScore fx
console.log("Total score: " + player.totalScore())

// export this file as a module
module.exports = Player;
