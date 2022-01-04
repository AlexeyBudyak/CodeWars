function maxGap (numbers){
  numbers = numbers.sort((a,b)=>(a-b))
  return numbers.reduce((max,x,i)=> i>0 ? Math.max(x-numbers[i-1], max) : 0 ,0)
}
