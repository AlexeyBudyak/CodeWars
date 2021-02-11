function twoDigits(n){
  return (n +'').length === 1 ? '0' + n : n;
}

function colorOf(r,g,b){
  return '#' + twoDigits(r.toString(16)) + twoDigits(g.toString(16)) + twoDigits(b.toString(16));
}
