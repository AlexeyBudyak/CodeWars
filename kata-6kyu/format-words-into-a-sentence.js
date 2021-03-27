function formatWords(words){
  if(words === null)  return '';
  words = words.filter(el=>el);
  return words.length === 0 ? '' 
           : words.length === 1 ? words[0] 
             : words.length === 2 ? words[0] + ' and ' + words[1]
               : words.slice(0,-1).join(', ') + ' and ' + words[words.length-1];
}
