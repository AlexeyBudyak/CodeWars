var maxRedigit = function(num) {
  return (num > 999 || num < 100) ? null : +(num+'').split('').sort().reverse().join('');
};
