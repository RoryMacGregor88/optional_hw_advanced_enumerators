const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase.toLowerCase().split('');
};

PangramFinder.prototype.isPangram = function () {

  const noSpacePhrase = this.phrase.filter( (letter) => {
    return (letter != ' ' && letter != '_' && letter != '!' && letter != '?');
  });

  const uniqueNoSpaces = [...new Set(noSpacePhrase)];

  if (uniqueNoSpaces.length === this.alphabet.length) {
    return true;
  } else {
    return false;
  }
};

module.exports = PangramFinder;
