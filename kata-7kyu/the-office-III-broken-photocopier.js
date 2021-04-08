function broken(x){
  return x.split('').map(el=>+!+el).join('');
}
