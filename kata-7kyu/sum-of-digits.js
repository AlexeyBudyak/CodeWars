function sum(d) {
   return d === undefined ? '' :
          (d+'').split('').join(' + ') + ' = ' + (d+'').split('').reduce((a,b)=>a+ +b,0);
}
