function calc(x){
  return x.split('').map(el=> el.charCodeAt(0)).join('').split('').filter(el=>el == 7).length * 6;          
}
