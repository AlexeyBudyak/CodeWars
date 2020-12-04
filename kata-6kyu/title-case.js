const capital = str => str[0].toUpperCase() + str.slice(1);

function titleCase(title, minorWords) {
  if(!title) return '';
  const except = minorWords ? minorWords.toLowerCase().split(' ') : '';
  return title.toLowerCase().split(' ')
              .map((el, i)=> (i && except.includes(el)) ? el : capital(el)).join(' ');
}
