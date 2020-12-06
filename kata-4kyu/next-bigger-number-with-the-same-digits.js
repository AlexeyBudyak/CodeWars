function nextBigger(n){
  const str = (n+'').split('').reverse().map(el=>+el);
  let temp, i = 0;
  
  while(i < str.length - 1 && str[i] <= str[i + 1]) i++;
  if(i === str.length - 1)  return -1;

  let pre =  str.slice(0,i + 1);
  
  const j = pre.indexOf(pre.reduce((max,n) => (n <= str[i + 1]) ? max : Math.min(max,n) ,str[i]));
  
  temp = str[j], str[j] = str[i + 1], str[i + 1] = temp;
  pre = str.slice(0,i + 1).sort((a,b) => b-a);
  pre.forEach((el,i) => str[i] = el);
  
  return +str.reverse().join('');
}
