function duplicateCount(text){
  text = text.toLowerCase().split('').sort();
  return text.filter((el, i) => el !== text[i -1] && el === text[i + 1]).length;
}
