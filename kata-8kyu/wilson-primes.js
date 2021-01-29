const factorial = x => (x === 1) ? 1: x * factorial(x - 1);
function amIWilson(P) {
  const wp = (factorial(P-1) + 1) / (P * P)
  return wp === ~~wp;
}
