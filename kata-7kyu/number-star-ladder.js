function pattern(n){
 var output="";
    for(let y = 1; y <= n; y++){
      if(y > 1)  output+= '\n';
      output+= '1';
      if(y > 1)  output+= '*'.repeat(y-1) + y;
    }
 return output;
}
