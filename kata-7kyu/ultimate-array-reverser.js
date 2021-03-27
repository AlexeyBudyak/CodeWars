const ultimateReverse = s => {
  const s2 = s.join('').split('').reverse();
  let i = 0;
  return s.map( el => s2.slice(i,i+= el.length).join(''));
}
