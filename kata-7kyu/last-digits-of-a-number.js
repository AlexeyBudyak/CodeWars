function lastDigit(n, d) { 
  n = [...(n + '')].map(el => +el);
  return n.slice(n.length - (d <= 0 ? 0 : d > n.length ? n.length : d));
}
