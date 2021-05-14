function heggeleggleggo(word){
  return word.split('')
             .map(el=>el + (' aeoui'.includes(el.toLowerCase()) ? '' : 'egg'))
             .join('')
}
