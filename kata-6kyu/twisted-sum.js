function twistedSum(n) {
  let N = Array(n).fill(0).map((_,i)=>i+1)
          .reduce((a,b)=>a+ (b<10 ? b : [...(b+'')].reduce((a,b)=>a+ +b,0)),0)
  return N;
}
