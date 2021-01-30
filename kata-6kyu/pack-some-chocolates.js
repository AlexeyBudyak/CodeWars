// return the number of small chocolates required to achieve 
// the desired goal. Return -1 if the goal cannot be achieved 
function makeChocolates(small, big, goal) {
  for(let i = (big * 5 > goal) ? ~~(goal / 5) * 5 : big * 5; i >= 0; i-= 5){
    const r = (goal - i) / 2;
    if(~~r === r && r <= small)  return r ;
  }
  return -1;
}
