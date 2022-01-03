function canalMania(lq, hq, l) {
  let ll = true // lockLow
  let time = 0;
  while(lq.length || hq.length){
    let load = 0;
    if(ll)  while(lq.length && load + lq[0] <= l)  load += lq.shift();
      else  while(hq.length && load + hq[0] <= l)  load += hq.shift();
    ll = !ll;
    time+= ++load;
  }
  return (time + !ll ) * 2;
}
