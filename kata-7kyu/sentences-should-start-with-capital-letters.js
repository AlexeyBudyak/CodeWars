function fix(paragraph){
  return paragraph
          .split('. ')
          .map(el=> (el[0] ? el[0].toUpperCase() : '')  + el.slice(1))
          .join('. ');
}
