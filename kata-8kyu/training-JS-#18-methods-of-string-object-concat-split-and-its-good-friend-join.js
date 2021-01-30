function splitAndMerge(str, sep) {
  return str.split(' ').map(el=>el.split('').join(sep)).join(' ');
} 
