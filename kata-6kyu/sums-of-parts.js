const partsSums = ls => {
  const result = [0];
  for(let i = 0; i < ls.length; i++){
    result.push(ls[ls.length - 1 - i] + result[i]);
  }
  return result.reverse();
}
