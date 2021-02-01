function isOpposite(s1,s2){
  return s1 !== s2 && 
         s1 === s2.split('').map(c=>
                                 c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase() 
                                ).join('');
}
