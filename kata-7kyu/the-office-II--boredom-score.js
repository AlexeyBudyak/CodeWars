function boredom(staff){
 const boredom = {
    accounts: 1,
finance: 2,
canteen: 10,
regulation: 3,
trading: 6,
change: 6,
IS: 8,
retail: 5,
cleaning: 4,
'pissing about': 25
  }
  let sum = 0;
  for(key in staff)  sum+=boredom[staff[key]]; 
  if(sum <= 80)  return 'kill me now';
  if(sum < 100)  return 'i can handle this';
  return 'party time!!';
}
