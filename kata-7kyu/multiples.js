function multiple(x) {
  return (x % 3 == 0 ? 'Bang' : '') + 
         (x % 5 == 0 ? 'Boom' : '') +
         (x % 3 && x % 5  ? 'Miss' : '') 
}
