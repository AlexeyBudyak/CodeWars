function hammingDistance (a, b) {
  return a.split('').reduce((n,x,i)=>n+(x!==b[i]),0);
}
