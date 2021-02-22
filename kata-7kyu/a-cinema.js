function cinema(x, y){
  return x === y ? 'GB'.repeat(x) 
                 : (x > y * 2 || y > x * 2) ? null
                 : x > y ? ('BGB'.repeat(x-y) + 'BG'.repeat(2*y-x))
                         : ('GBG'.repeat(y-x) + 'GB'.repeat(2*x-y))
}
