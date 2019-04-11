const IsogramFinder = function (word) {

  this.word = word.split('');

};

IsogramFinder.prototype.isIsogram = function () {
  uniqueLetterWord = [...new Set(this.word)];

  if (uniqueLetterWord.length === this.word.length) {
    return true
  } else {
    return false
  }
};

module.exports = IsogramFinder;
