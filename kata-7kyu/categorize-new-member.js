function openOrSenior(data){
  return data.map(el => (el[0] > 54 && el[1] > 7) ? 'Senior' : 'Open');
}
