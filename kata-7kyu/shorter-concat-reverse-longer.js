function shorter_reverse_longer(a,b){
  if(a.length < b.length)  [a,b] = [b,a];
  return b + a.split('').reverse().join('') + b;
}
