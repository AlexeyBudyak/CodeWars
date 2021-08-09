function sc(exchange){
  hats = [false, false, true, false]
  exchange.forEach(el=>{x = el.split('-'); [hats[+x[0]],hats[+x[1]]] = [hats[+x[1]],hats[+x[0]]]})
  return '' + hats.reduce((sum,x,i)=> sum + x * i, 0)
}
