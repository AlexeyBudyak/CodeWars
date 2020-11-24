function alphaTest( char) {
  for(let i = 0; i< 5; i++)
    if(Object.keys(alpha)[i].includes(char))  return Object.values(alpha)[i]
  return 0;
}
function nameScore(name){
  const abc = '     ';
  return {[name]: name.toUpperCase().split('')
          .reduce((acc,curr)=>acc + alphaTest(curr),0)}
}
