function flipper(stringArr){
  return stringArr.reverse()
                  .map(el=> el.length === 1 ? el :
                            el.slice(0,el.length-1).toLowerCase() 
                          + el[el.length-1].toUpperCase())
                  .join(' ');
}
