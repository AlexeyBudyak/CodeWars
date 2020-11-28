function persistence(num) {
  let count = 0;
  while(num > 9){
    num = (num+'').split('').reduce((a,b)=>a*(+b),1);
    count++;
  }
  return count;
}
