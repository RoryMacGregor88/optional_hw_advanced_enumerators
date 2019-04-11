const AnagramFinder = function (word) {
  this.word = word;
  this.preparedWord = word.toLowerCase().split('').sort().join('');
};

AnagramFinder.prototype.findAnagrams = function (otherWords) {
  const total = [];
  for (var i = 0; i < otherWords.length; i++) {
    if (otherWords[i] === this.word) {
      return total;
    } else {
      const sortedWordString = otherWords[i].toLowerCase().split('').sort().join('');
      if (sortedWordString === this.preparedWord) {
        total.push(otherWords[i]);
      };
   }
  };
  return total;
};

module.exports = AnagramFinder;
