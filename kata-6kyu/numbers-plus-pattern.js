function pattern(n){
var output="";
  for(let i = 1; i < n; i++)
    output+= ' '.repeat(n - 1) + i % 10 + '\n';
  for(let i = 1; i < n; i++)
    output+= i % 10 ;
  for(let i = n; i > 0; i--)
    output+= i % 10;
  output+= '\n';
  for(let i = n - 1; i > 0; i--)
    output+= ' '.repeat(n - 1) + i % 10 + '\n';
  return output;
}
