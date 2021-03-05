function theLongest(text){
  return text.split(' ').sort((a,b)=>b.length-a.length)[0];
}
