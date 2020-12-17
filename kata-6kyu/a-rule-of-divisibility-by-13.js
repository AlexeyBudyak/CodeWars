function thirt(n) {
  const r13 = [1, 10, 9, 12, 3, 4];
  const n2 = (n + '').split('').reverse().reduce((sum, el, i)=> sum + (+el) * r13[i % 6],0);
  return n === n2 || n < 10 ? n : thirt(n2);
}
