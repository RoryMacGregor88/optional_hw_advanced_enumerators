const UpperCaser = function (words) {
  this.words = words;
}

UpperCaser.prototype.toUpperCase = function (){
  const upperCaseWords = [];
  for (var i = 0; i < this.words.length; i++) {
    upperCaseWords.push(this.words[i].toUpperCase());
  }
  return upperCaseWords;
};

module.exports = UpperCaser;
