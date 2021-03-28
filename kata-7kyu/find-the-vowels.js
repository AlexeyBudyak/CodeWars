function vowelIndices(word){
  return word.toLowerCase()
             .split('')
             .map((el,i)=>'aeuioy'.includes(el) ? i+1 : 0)
             .filter(el=>el);
}
