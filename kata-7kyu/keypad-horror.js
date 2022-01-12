function computerToPhone(numbers){
  return numbers.replace(/[1-9]/g,x=>x- ~~((x-1)/3) * 6 + 6)
}
