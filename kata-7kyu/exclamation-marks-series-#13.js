function product(s){
  return s.split('').reduce((acc, curr ) => curr === '!' ? acc + 1 : acc, 0) *
        s.split('').reduce((acc, curr ) => curr === '?' ? acc + 1 : acc, 0);
}
