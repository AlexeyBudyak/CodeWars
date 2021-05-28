function findSum(...arg){
  return arg.some(el => el < 0) ? -1 : arg.reduce((a,b) => a + b, 0);
}
