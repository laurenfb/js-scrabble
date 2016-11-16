var CONSTANTS = require('./scrabble_constants');
var Scrabble = require('./scrabble')

// constructor!
var Player = function(name) {
  this._name = name;
  this._plays = [];
};

// testing that we can instantiate a new Player
var player = new Player("Edith");
console.log("Player is: " + player._name);
console.log("Player's plays:" + player._plays);

// export this file as a module
module.exports = Player;
