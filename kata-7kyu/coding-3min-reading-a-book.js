function sc(words){
  words = words.toLowerCase().replace(/[^a-z ]/g,'').split(' ')
  return words.reduce((sum,word,i)=> words.slice(0,i).includes(word) ? sum + 1 : sum + word.length ,0)
}
