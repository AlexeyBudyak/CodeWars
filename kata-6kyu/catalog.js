function retrive(str, word){
  return str.substring(str.indexOf(word) + word.length + 1, str.lastIndexOf(word) - 2);
}
function catalog(s, article) {
  return s.split('\n')
        .filter(el=>el.includes(article))
        .map(el=> retrive(el, 'name') + ' > prx: $' + retrive(el, 'prx') + ' qty: ' + + retrive(el, 'qty'))
        .join('\r\n') || 'Nothing';
}
