function replaceLetters(word) {
  const codes = ['z','e','e','e','d','i','i','i','h','o','o','o','o','o','n','u','u','u','u','u','t','a','a','a','a','a']
  return word.split('').map(el=> codes[alphabet.indexOf(el)]).join('');                          
}
