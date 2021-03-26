function scrollingText(text){
  text = text.toUpperCase();
  return text.split('').map((_,i)=>text.slice(i) + text.slice(0,i));
}
