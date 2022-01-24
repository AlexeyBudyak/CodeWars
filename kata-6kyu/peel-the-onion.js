function peelTheOnion (s, d) {
  let result = [];
  for(let i = 2 - s % 2; i <= s; i+= 2)
    result.unshift(i ** d - result.reduce((sum,x)=> sum + x,0));
  return result;
}
