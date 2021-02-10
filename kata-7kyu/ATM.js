function solve(n) {
  if(n%10)  return -1;
  let num = 0;
  while(n){
    num++;
    if(n >= 500)  {n-= 500; continue}
    if(n >= 200)  {n-= 200; continue}
    if(n >= 100)  {n-= 100; continue}
    if(n >= 50)  {n-= 50; continue}
    if(n >= 20)  {n-= 20; continue}
    n-= 10;
  }
  return num;
}
