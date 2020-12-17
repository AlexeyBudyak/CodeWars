function theJanitor(word) {
  const abc = 'abcdefghijklmnopqrstuvwxyz'.split('');
  word = word.split('');
  return abc.map(el=> word.includes(el) ? word.lastIndexOf(el) - word.indexOf(el) + 1 : 0);
}
