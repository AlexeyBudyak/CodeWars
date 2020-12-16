function solve(a,b){
  return b.map(el => a.filter(check=> check === el).length);
}
