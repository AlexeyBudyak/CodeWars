function hammingDistance (a, b) {
  let aBin = a.toString(2).padStart(32,'0');
  let bBin = b.toString(2).padStart(32,'0').split('');
  return bBin.reduce((sum,x,i)=>sum + (x !== aBin[i]),0);  
}
