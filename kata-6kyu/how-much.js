function howmuch(m, n) {
  const offers = [];
  if(m > n)  [m, n] = [n, m];
  for(let s = m; s <= n; s++)
    if(s % 7 === 2 && s % 9 === 1)  
      offers.push(['M: ' + s,'B: ' + (s - 2) / 7,'C: ' + (s - 1) / 9]);
  return offers;
}
