function tripleTrouble(...str){
  let output = '';
  for(let i = 0; i < str[0].length; i++)
    output+= str[0][i]+str[1][i]+str[2][i];
  return output;
 }
