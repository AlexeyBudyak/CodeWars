function pattern(n){
 var output=[];
   for(let i = 1; i <= n; i+= 2 )
     output.push((i + '').repeat(i));
 return output.join('\n');
}
