function solve(s) {
  return Math.max(...s.split(/a|e|i|o|u/)
    .map(str=>str.split('').reduce((sum,el)=> sum + el.charCodeAt(0) - 96 ,0)));
}
