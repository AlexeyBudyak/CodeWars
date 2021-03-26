function olympicRing(a){
  const rings = "abdegopqADOPRQ";
  const medals = ['Not even a medal!', 'Not even a medal!', 'Bronze!', 'Silver!']
  const score = ~~a.split('')
         .reduce((sum,el)=> sum + (rings.includes(el) ? 0.5 : 0) + (el === 'B' ? 1 : 0) ,0)
  return score > 3 ? 'Gold!' : medals[score];
}
