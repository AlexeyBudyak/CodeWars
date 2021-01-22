function remove(a,b){
  return a.split('').filter(el=>!b.includes(el)).join('');
}
function solve(a,b){
   return remove(a,b) + remove(b,a);
};
