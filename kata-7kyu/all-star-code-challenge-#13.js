var translate = function(word) {
  return word.length < 2 ? word :
  ('aeiou'.includes(word[0]) ? word : word.slice(1) + word[0]) + 'ay';
}
