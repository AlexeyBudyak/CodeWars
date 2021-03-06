function doubleton(num){
  do{ 
    num++ 
  }while((num+'').split('').filter((el,i,arr)=> arr.indexOf(el) === i).length !== 2);
  return num;
} 
