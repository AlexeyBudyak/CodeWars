function isIsogram(str){
  str = str.toLowerCase().split('');
  return str.every(el => str.indexOf(el) === str.lastIndexOf(el));
}
