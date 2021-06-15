function maxSumBetweenTwoNegatives(a) {
  const arr = a.map(el=>el<0 ? -1 : el)
          .join()
          .split(-1)
          .slice(1,-1)
          .map(el=> el.split(',').reduce((a,b)=>a+ +b,0));
  return  !arr.length ? -1 : Math.max(...arr);
}
