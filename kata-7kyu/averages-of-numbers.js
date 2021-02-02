function averages(num) {
  return !num || num.length < 2 ? [] : num.slice(0,-1).map((el,i)=>(el + num[i+1])/2);
}
