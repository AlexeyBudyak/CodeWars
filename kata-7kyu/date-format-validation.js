function dateChecker(date){
  const mask = '11-11-1111 11:11';
  return date.length === 16 && [...date].every((el,i)=>el * mask[i] == el || el === mask[i] )
}
