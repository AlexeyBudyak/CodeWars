String.prototype.compareForm = function () {
  return this.toLowerCase().split('').filter(el=>el !== ' ').sort().join('');
}

function isMatching(string, str1, str2) {
  return string.compareForm() === (str1 + str2).compareForm();
}
