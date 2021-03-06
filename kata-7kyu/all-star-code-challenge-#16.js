function noRepeat(str) {  
  return str.split('').filter(el=>str.indexOf(el) === str.lastIndexOf(el))[0];
}
