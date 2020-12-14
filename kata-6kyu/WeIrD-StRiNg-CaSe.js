function toWeirdCase(string){
  return string.split(' ')
         .map(word => word.split('').map((el,i)=> i % 2 ? el : el.toUpperCase()).join(''))
         .join(' ');
}
