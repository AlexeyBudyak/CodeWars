function outed(meet, boss){
  let num = 0;
  let rate = 0;
  for(let key in meet){
    rate+= meet[key];
    if(key === boss)  rate+= meet[key];
    num++
  }
  return rate / num <= 5 ?  'Get Out Now!' : 'Nice Work Champ!';
}
