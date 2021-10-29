function solve(s){
  return 'abcdefghijklmnopqrstuvxyz'.includes(s.split("").sort().join(''));
}
