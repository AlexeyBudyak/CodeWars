function withdraw(n) {
  let bills = [0,0,0];
  if(n % 20)  bills[1]++,n-=50;
  if(n > 100) bills[0]+= Math.floor(n / 100), n-= (bills[0] * 100);
  bills[2] = n / 20;
  return bills;
}
