function queueTime(customers, n) {
  let quene = [];
  for(let i = 0; i < n; i++)  quene.push(0);
  // let quene = new Array(n).fill(0);
  customers.forEach(el => quene[quene.indexOf(Math.min(...quene))]+= el);
  return Math.max(...quene);
}
