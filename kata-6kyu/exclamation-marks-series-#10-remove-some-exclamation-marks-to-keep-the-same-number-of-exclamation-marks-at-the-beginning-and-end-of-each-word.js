function wordEd(word){
  const realWord = word.replace(/[!]/g,'');
  const frame = word.split(realWord).sort()[0];
  return frame + realWord + frame;
}
function remove(s){
  return s.split(' ').map(el=>wordEd(el)).join(' ');
}
