function planeSeat(a){
  const n = a.slice(0,-1);
  const c = a.slice(-1);
  if(n > 60 || !'ABCDEFGHK'.includes(c))  return 'No Seat!!';
  return  (n < 21 ? 'Front' : n < 41 ? 'Middle' : 'Back')
         + ('ABC'.includes(c) ? '-Left' : 'DEF'.includes(c) ? '-Middle' : '-Right');
}
