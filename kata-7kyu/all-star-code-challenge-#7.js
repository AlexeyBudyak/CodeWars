function compute(n){
  return (n < 0 || !(n%2)) ? 0 : 
          Array((n+1)/2).fill(1).map((_,i)=>1 / (1 + i * 2) ** 2).reduce((a,b)=>a+b,0)
}
