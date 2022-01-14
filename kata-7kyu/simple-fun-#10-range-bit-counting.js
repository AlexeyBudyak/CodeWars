function rangeBitCount(a, b) {
  return new Array(b-a+1).fill(0).map((_,i)=>(i+a).toString(2))
                         .join('').split('1').length - 1;
}
