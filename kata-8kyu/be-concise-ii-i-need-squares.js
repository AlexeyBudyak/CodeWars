function squaresOnly(a) {
  return a.filter(el=>(~~(el ** 0.5)) ** 2 === el);
}
