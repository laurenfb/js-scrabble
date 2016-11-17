var Scrabble = require('../scrabble');
var Player = require('../player');

describe('testing Scrabble module', function() {

    it('Scrabble can say hello', function() {
      expect(Scrabble.helloWorld()).toBe("hello world!");
    });

    it('scrabble can score a word correctly', function() {
        expect(Scrabble.score("word")).toBe(8);
    });

    it('scrabble can score a bingo correctly', function() {
        expect(Scrabble.score("uuuuuuu")).toBe(57);
    });

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


});
