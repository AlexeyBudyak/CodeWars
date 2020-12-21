const flip=(d, a)=>{
  return a.sort((n1, n2) =>  d === 'R' ? n1 - n2 : n2 - n1);
}
