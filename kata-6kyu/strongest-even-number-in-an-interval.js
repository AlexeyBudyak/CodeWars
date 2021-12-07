function strongMeter(n){
  let strength = 0;
  while(n % 2 === 0)  n/=2, strength++;
  return strength;
}

function strongestEven(n, m){
  console.log(n,m)
  if(n % 2) n++;
  let strongest  = n;
  let value = strongMeter(n);
  let step = 2;
  let check;
  for(let x = n + 2; x <= m; x+=step ){
    check = strongMeter(x);
    if(value < check){
      strongest = x;
      value = check;
      step = 2 ** value;
     }
  }
  return strongest;
}
