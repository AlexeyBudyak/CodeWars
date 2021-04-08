var buy = function(x, arr){
  return arr.map((el,i) => [i,arr.map((gift,j) => j === i  ? 0 : gift).indexOf(x-el)] )
            .filter(gifts => arr[gifts[0]] !== x && gifts[1] > -1)[0] || null;
};
