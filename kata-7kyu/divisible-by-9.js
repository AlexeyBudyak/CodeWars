function divBy9(ns){
  return ns.split('').reduce((sum,x)=>sum + +x,0) % 9 === 0;
}
