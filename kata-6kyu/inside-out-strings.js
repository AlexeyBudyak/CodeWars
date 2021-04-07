function insideOut(x){
  return x.split(' ')
          .map(el=> el.split('').slice(0,el.length/2).reverse().join('') 
                 + (el.length % 2 ? el[~~(el.length/2)] : '')     
                 + el.split('').slice(el.length/2 + el.length % 2).reverse().join('') )
          .join(' ');
}
