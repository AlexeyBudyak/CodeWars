function roots(a,b,c){
  return (b * b - 4 * a * c < 0) ? null : +(- b / a).toFixed(2);
}
