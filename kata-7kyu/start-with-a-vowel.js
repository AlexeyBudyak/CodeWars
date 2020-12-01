function vowelStart(str){
  return str.toLowerCase()
    .replace(/[_! ,-]/g,'')
    .replace(/[aeiou]/g, ' $&').trim();
}
