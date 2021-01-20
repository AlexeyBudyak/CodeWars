function arrFactors(n){
  for(let i = 2; i <= Math.sqrt(n);i++)
    if(n % i === 0)  return [i, ...arrFactors(n / i)];
  return [n];
}
function primeFactors(n){
    return arrFactors(n)
      .map((el,i, arr) => arr.indexOf(el) === arr.lastIndexOf(el) ? '(' + el + ')'
           : arr.indexOf(el) === i 
               ? '(' + el + '**' + (arr.lastIndexOf(el) - arr.indexOf(el) + 1) + ')' : '')
      .join('');
}
