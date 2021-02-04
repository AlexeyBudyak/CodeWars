function animals(heads, legs){
  if(heads >= 0)
  for(let i = 0; i <= heads; i++)
    if(i * 2 + (heads - i) * 4 === legs)
      return [i, heads - i];
  return 'No solutions';
}
