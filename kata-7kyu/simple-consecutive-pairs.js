function pairs(ar){
   return ar.reduce((sum,x,i) => sum += (i % 2 === 0) ? 0 : Math.abs(x - ar[i - 1]) === 1 ,0);
};
