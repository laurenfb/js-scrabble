var Scrabble = require('../scrabble');
var Player = require('../player');

describe('testing Scrabble module', function() {


////////////// easy test :) //////////////////////
    it('Scrabble can say hello', function() {
      expect(Scrabble.helloWorld()).toBe("hello world!");
    });

/////////////////// score //////////////////////////
    it('scrabble can score a word correctly', function() {
        expect(Scrabble.score("word")).toBe(8);
    });

    it('scrabble can score a bingo correctly', function() {
        expect(Scrabble.score("uuuuuuu")).toBe(57);
    });

    it('scrabble returns false when input is not a string', function() {
        expect(Scrabble.score(23948)).toBe(false);
        expect(Scrabble.score([3,5, "cat"])).toBe(false);
    });

    it('if a word does not have only letters, scrabble returns false', function() {
        expect(Scrabble.score("23948cat")).toBe(false);
        expect(Scrabble.score("cat0%")).toBe(false);
    });

/////////// highestScoreFrom working correctly ////////////
    it('scrabble can score a list of words, none of which are bingos, correctly', function() {
        expect(Scrabble.highestScoreFrom(["uuuuuu", "you", "cat", "syzygy" ])).toBe("syzygy");
    });

    it('scrabble can score a list of words, one of which is a  bingo, correctly', function() {
        expect(Scrabble.highestScoreFrom(["uuuuuua", "you", "cat", "syzygy" ])).toBe("uuuuuua");
    });

    it('scrabble can score a list of words that are tied for score and length & choose the first one as the winner', function() {
        expect(Scrabble.highestScoreFrom(["uuuuuu", "iiiiii", "aaaaaa" ])).toBe("uuuuuu");
    });

    it('scrabble can score a list of words that are tied for score, except one is a bingo, choose the bingo rather than the one that is shorter', function() {
        expect(Scrabble.highestScoreFrom(["zzzzzz", "iiiiiif" ])).toBe("iiiiiif");
    });

    it('list of words tied for score but not length is scored correctly, where the shortest length one is returned if nothing is a bingo', function() {
        expect(Scrabble.highestScoreFrom(["aaa", "c", "id" ])).toBe("c");
    });

//////////// highestScoreFrom error testing /////////
    it('when passed an empty array, highestScoreFrom should let you know', function() {
        expect(Scrabble.highestScoreFrom([])).toBe("There is no highest scoring word.");
    });

    it('when passed an array of garbage, highestScoreFrom should let you know', function() {
        expect(Scrabble.highestScoreFrom(["dsfk24234", "$%#;", 230585])).toBe("There is no highest scoring word.");
    });

    it('when passed an array where one word is valid and the rest are garbage, it should score that word & return it as the highest scoring', function() {
        expect(Scrabble.highestScoreFrom(["dsfk24234", "$%#;", 230585, "cat"])).toBe("cat");
    });

});
