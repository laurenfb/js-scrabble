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
  } //end of play fx

}

// testing that we can instantiate a new Player
var player = new Player("Edith");
console.log("Player is: " + player._name);
console.log(player._name +  "'s plays: " + player._plays);
console.log(player._name +  "'s score: " + player._score);
console.log("Player won? " + player._won)
player.play("cat")
console.log(player._name +  "'s plays:" + player._plays);
// player._won = true;
// console.log(player._won);
player.play("bloooop");
console.log(player._name +  "'s plays:" + player._plays);
// export this file as a module
module.exports = Player;
