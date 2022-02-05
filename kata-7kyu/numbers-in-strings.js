function solve(s){
  return Math.max(...s.split(/[a-z]/g).filter(el=>el).map(el=>+el));
};
