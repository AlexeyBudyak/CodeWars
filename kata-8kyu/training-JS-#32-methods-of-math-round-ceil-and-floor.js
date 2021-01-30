function roundIt(n){
  const arr = (n+'').split('.').map(el=>el.length);
  return (arr[0] === arr[1])  ? Math.round(n) 
                              : (arr[0] < arr[1]) ? Math.ceil(n)
                                                  : Math.floor(n);                                  
}
