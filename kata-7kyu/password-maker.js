function makePassword(phrase) {
  return phrase.replace(/[iIoOsS]/g, w => {return {i:1,o:0,s:5}[w.toLowerCase()]} )
               .split(' ').map(el=>el[0]).join('');
}
