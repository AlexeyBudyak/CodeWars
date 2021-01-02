function shiftedDiff(first,second){
  const l = first.length - 1;
  for(let i = 0; i <= l; i++){
    if(first === second)  return i;
    first = first[l] + first.substring(0, l);
  }
  return -1;
}
