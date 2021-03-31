palindrome = function(str) {
  return str.toLowerCase() === str.toLowerCase().split('').reverse().join('');
}
