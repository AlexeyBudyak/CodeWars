function productArray(numbers){
  return numbers.map((_,i) => numbers.reduce((p,x,j)=> j != i ? p * x : p ,1))
}
