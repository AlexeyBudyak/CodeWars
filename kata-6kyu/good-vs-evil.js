function goodVsEvil(good, evil){
  const gTeam = [1, 2, 3, 3, 4, 10];
  const eTeam = [1, 2, 2, 2, 3, 5, 10];
  const g = good.split(' ').reduce((a,b,i)=> a + +b * gTeam[i], 0);
  const e = evil.split(' ').reduce((a,b,i)=> a + +b * eTeam[i], 0);
  const br = 'Battle Result: ';
  if(g > e)  return br + 'Good triumphs over Evil';
  if(g < e)  return br + 'Evil eradicates all trace of Good';
  return br + 'No victor on this battle field';
}
