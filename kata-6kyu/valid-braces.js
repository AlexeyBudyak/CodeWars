function validBraces(braces){
  let N = braces.length + 1;
  while(braces.length !== N)  
    N = braces.length, braces = braces.replace('()','').replace('[]','').replace('{}','');
  return !braces.length;
}
