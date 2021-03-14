function splitOddAndEven(n) {
  return (n+'').split('')
               .map((el,i,arr)=>(i && arr[i-1]%2 !== el%2) ? ',' + el : el)
               .join('')
               .split(',')
               .map(el=>+el);
}
