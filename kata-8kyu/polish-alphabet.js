function correctPolishLetters (str) {
  str = str.replace(/[ą]/g, 'a');
  str = str.replace(/[ć]/g, 'c');
  str = str.replace(/[ę]/g, 'e');
  str = str.replace(/[ł]/g, 'l');
  str = str.replace(/[ń]/g, 'n');
  str = str.replace(/[ó]/g, 'o');
  str = str.replace(/[ś]/g, 's');
  str = str.replace(/[ź]/g, 'z');
  str = str.replace(/[ż]/g, 'z');
  return str;    
}
