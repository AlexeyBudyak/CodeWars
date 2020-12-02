function toCamelCase(str){
  return str.split(/-|_/)
            .map((el,i) => i ? el[0].toUpperCase() + el.slice(1) : el)
            .join('');
}
