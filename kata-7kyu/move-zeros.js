function move_zeros(arrNum, isRight = true){
  return arrNum.filter(el=>!el && !isRight)
               .concat(arrNum.filter(el=>el),arrNum.filter(el=>!el && isRight))
}
