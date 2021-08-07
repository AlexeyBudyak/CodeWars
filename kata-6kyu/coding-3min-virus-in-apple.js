function spread(apple){     
  for(let i =0; i < apple.length; i++)
    for(let j = 0; j < apple[i].length;j++)
      if(apple[i][j] == 'V'){
        console.log(i,j, i < apple.length -1 && apple[i+1][j] == 'A')
        if(i && apple[i-1][j] == 'A')  apple[i-1][j] = 'v';
        if(j && apple[i][j-1] == 'A')  apple[i][j-1] = 'v';
        if(i < apple.length -1 && apple[i+1][j] == 'A') apple[i+1][j] = 'v';
        if(j < apple[i].length -1 && apple[i][j+1] == 'A') apple[i][j+1] = 'v';
      }
  return apple.map(lines => lines.map(el => el.toUpperCase()));
}

function sc(apple,n){
  for(let i = 0; i < n; i++)
    apple = spread(apple);
  return apple;
}
