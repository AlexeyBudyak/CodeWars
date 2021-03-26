function cake(x, y){
  return y.split('').reduce((sum,char, i)=>sum + char.charCodeAt(0) - i%2 * 96,0) <= x * 0.7
     ? 'That was close!' : 'Fire!';
}
