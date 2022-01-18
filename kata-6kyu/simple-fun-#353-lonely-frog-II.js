function jumpTo(n){
  let step = 1;
  let jumps = 0;
  let distance = 1
  while(distance < n / 2) distance+= step++, jumps++;
  let fastDistance = 2 * distance - 1;
  let fastJumps = 2 * jumps;
  let slowDistance = distance + distance - step;
  let slowJumps = Math.max(2 * jumps - 1, 0);
  if(n < 2) return 0;
  if(slowDistance >= n)  return slowJumps;
  if(fastDistance >= n)   return fastJumps;
  return fastJumps+1
}
