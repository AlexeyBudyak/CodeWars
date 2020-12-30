function divisibleByLast(n) {
  return (n + '').split('').map((el,i,arr)=> (!(el % arr[i - 1]) && i!=0 && arr[i - 1]!=0))
}
