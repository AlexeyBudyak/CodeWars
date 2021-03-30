/* Should return ᐃ type:
  0 : if ᐃ cannot be made with given sides
  1 : acute ᐃ
  2 : right ᐃ
  3 : obtuse ᐃ
*/
function triangleType(a, b, c){
  const max = Math.max(a,b,c);
  return max * 2 >= a + b + c ? 0
           : max * max * 2 === a * a + b * b + c * c ? 2
             : max * max * 2 >  a * a + b * b + c * c ? 3 : 1
}
