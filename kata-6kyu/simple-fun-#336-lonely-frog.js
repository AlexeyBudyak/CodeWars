function jumpTo(n){
  n = Math.abs(n)
  let step = 0;
  for(let x = 0; x < n || (x - n) % 2; x+= ++step);
  return step;
}
