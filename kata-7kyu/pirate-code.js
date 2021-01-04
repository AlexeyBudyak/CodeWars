function amaroPlan(pirateNum){
  return [...Array(pirateNum)].map((_,i)=> i ? +!(i % 2) : pirateNum * 20 - ~~((pirateNum - 1) / 2));
}
