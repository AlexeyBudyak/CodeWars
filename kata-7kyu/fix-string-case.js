function solve(s){
  let numLowerCase = 0;
  let numUpperCase = 0;
  for(let i = 0; i < s.length; i++){
    if(s[i] === s[i].toUpperCase())  
      numUpperCase++;
    else
      numLowerCase++;
  }
  console.log(s,numUpperCase,numLowerCase)
  return numUpperCase > numLowerCase ? s.toUpperCase() : s.toLowerCase();
}
