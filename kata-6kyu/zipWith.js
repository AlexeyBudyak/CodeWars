function zipWith(fn,a0,a1) {
  return a0.slice(0,a1.length).map((el,i) => fn(el,a1[i]));
}
