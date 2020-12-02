function pigLatin(phrase){
  return phrase.toLowerCase()
               .split(' ')
               .map(el => el.slice(1) + el[0] + 'ay')
               .join(' ');
}
