function reverseCase(str) {
  return str.split('').map(el => el === el.toLowerCase() ? el.toUpperCase() : el.toLowerCase()).join('');
}
function reverseReverse(str){
  return reverseCase(str).split('').reverse().join('');
}
function reverseAndMirror(s1,s2) {
  return reverseReverse(s2) + '@@@' + reverseReverse(s1) + reverseCase(s1);
}
