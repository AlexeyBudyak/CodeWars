function high(x){
  x = x.split(' ');
  const sizes = x.map(el=>el.split('').reduce((a,b)=>a + b.charCodeAt()-96,0));
  return x[sizes.indexOf(Math.max(...sizes))];
}
