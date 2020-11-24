function isPalindrome(x) {
  x=x.toLowerCase();
  return x.split('').every((el,i)=> el===x[x.length-1-i]);
}
