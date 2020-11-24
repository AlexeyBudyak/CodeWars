function wordsToMarks(str){
  let s = 0;
  for(let i = 0; i < str.length; i++)
    s+= str[i].codePointAt() - 96; 
  return s;
}
