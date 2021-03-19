function hasUniqueChars(str){
  return str.split('').filter(el=> str.indexOf(el) === str.lastIndexOf(el)).join('') === str;
}
