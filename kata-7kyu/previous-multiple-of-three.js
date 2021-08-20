const prevMultOfThree = n => {
  n = '' + n
  while (n.length) {
    if( [...n].reduce((sum, x)=> sum + x ,0) % 3 === 0)
      return +n
    n = n.slice(0,-1)
  }
  return null;
}
