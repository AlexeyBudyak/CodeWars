function areaCode(text) {
  return text.substring(text.indexOf('(') + 1,text.indexOf(')'));
}
