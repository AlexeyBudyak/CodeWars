function buildRowText(index, character) {
  let col = '|'
  for(let i = 0; i <= 8; i++)
    col+= ((index === i) ? character : ' ') + '|';
  return col;
}
