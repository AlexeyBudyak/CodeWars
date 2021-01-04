const rotateToMax = n => {
  return +(n + '').split('').sort().reverse().join('');
}
