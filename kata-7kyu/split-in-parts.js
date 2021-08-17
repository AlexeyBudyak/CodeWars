var splitInParts = function(s, l){
  return [...s].map((el,i)=> (i && i%l == 0) ? ' ' + el : el).join('');
}
