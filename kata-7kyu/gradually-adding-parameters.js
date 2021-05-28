function add(...arg) {
  return arg.reduce((a,b,i)=>a+b*(i+1),0)
}
