function onesComplement(n) {
  return n.split('').reduce((s,x)=>s+(1-x),'')
};
