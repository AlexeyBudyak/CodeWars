function caesarEncode(phrase, shift) {
  const abc = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz';
  let sp = 0;
  const space = () => {sp++;  return ' '}
  return phrase.split('')
               .map(el=> el === ' ' ? space() : abc[abc.indexOf(el) + (shift + sp) % 26])
              .join('');
}
