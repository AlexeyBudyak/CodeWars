function isPronic(n){
  const c = ~~(n ** 0.5);
  return (c * (c + 1) === n);
}
