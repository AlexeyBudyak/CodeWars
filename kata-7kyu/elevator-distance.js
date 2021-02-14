function elevatorDistance(array) {
  return array.reduce((sum,el,i)=> (i) ? sum + Math.abs(el - array[i-1]) : sum, 0)
}
