function i(word) {
  if(word.length == 0 || word[0].toUpperCase() !== word[0] || word[0] == 'I' 
     || word.replace(/[aeoui]/ig,'').length * 2 <= word.length)
    return "Invalid word"
  return 'i' + word
}
