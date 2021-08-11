function change(name,items,payment){
  result = +(payment - items.reduce((sum, x) => sum + x, 0)).toFixed(2)
  if(name == 'John')
    result = +((result<= 0) ? 0 : ~~result + (result % 1) * 2).toFixed(2)
  return result
}
