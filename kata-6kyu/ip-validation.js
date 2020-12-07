function isValidIP(str) {
  return str.split('.').length === 4 &&
         str.split('.').every(n => n >= 0 && 
                              n <= 255 && 
                              +n[0] + !(n.length - 1) && 
                              n.split('').every(c => '0123456789'.includes(c) )
                             );
}
