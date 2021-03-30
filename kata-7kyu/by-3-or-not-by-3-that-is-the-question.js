function divisibleByThree(str){
  const n =  str.split('').reduce((a,b)=>a+ +b,0);
  return n > 9  ? divisibleByThree(n+'')
                : ( n === 0 || n === 3 || n === 6 || n === 9); 
}
