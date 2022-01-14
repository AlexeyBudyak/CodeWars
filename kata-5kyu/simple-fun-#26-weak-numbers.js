function weakness(n){
  let power = 1;
  for(let i = 2; i <= n; i++) 
    power+= (n % i === 0);
  return power;
}

function weakNumbers(n) {
  let divs = [], weak = [];
  for(let i = 1; i <= n; i++){
    divs.push(weakness(i))
    weak.push(divs.reduce((s,x)=> s + +(x > divs[i-1]),0))
  }
  const max = Math.max(...weak);
  return [max, weak.filter(x=>x === max).length];
}
