function duplicateEncode(word){
  word = word.toLowerCase().split('');
  return word.map(el => word.indexOf(el) === word.lastIndexOf(el) ? '(' : ')').join('');
}
