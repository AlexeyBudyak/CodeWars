const solution = mtrx => {
 return mtrx.map( el=> el.filter(s => s ==='>' || s ==='x').join('')).filter(el=>el)[0] === '>x' ;
}
