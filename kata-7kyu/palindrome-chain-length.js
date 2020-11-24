var palindromeChainLength = function(n) {
  let i = 0;
  let arr = (n+'').split('');
  let num;
  while(arr.join('') !== arr.reverse().join('')){
    num = +arr.join('') + +arr.reverse().join('');
    arr = (num + '').split('');
    i++;
  }
  return i;
};
