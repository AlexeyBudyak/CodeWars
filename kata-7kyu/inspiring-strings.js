function longestWord(stringOfWords){
  return stringOfWords.split(' ').reverse().sort((a,b,)=> a.length < b.length)[0];
}
