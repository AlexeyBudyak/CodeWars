function diamond(n){
  if(n < 1 || !(n % 2) )  return null;
  const diamond = [];
  const mid = Math.ceil(n / 2);
  for(let i = 0; i < mid; i++)  
    diamond.push(' '.repeat(mid - i  - 1) + '*'.repeat(1 + i * 2) + '\n');
  return diamond.concat([...diamond].reverse().slice(1)).join('');
}
