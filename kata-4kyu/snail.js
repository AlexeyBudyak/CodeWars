snail = function(array) {
  if(array.join() === '')  return [];
   if(array.length === 1)  return [+array.join()];
  const snake = [...array[0]];
  const bar = [];
  for(let i = 1; i < array.length - 1; i++){
    snake.push(array[i][array.length - 1]);
    bar.push([...array[i].filter((el,i)=> i && i <array.length - 1)]);
  }
  snake.push(...array[array.length-1].reverse());
  for(let i = array.length - 2; i ; i--){
    snake.push(array[i][0]);
  }   
  return array < 3 ? snake : [...snake, ...snail(bar)];
}
