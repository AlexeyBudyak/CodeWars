function connotation(str) {
  const words = str.split(" ").filter(el => el);
  return words.reduce((sum, word) => sum + "abcdefghijklm".includes(word[0].toLowerCase() || ''), 0) * 2 >= words.length; 
}
