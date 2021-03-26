function rotate(str){
  return str.split('').map((_,i)=>str.slice(i+1) + str.slice(0, i + 1));
}
