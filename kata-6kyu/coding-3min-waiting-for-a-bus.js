function timeForm(h, m){
  return (h > 9 ? '' : '0') + h + ':' + (m > 9 ? '' : '0') + m;
}
function addTime(time, addM){
  let [h,m] = time.split(':').map(el=>+el)
  let [newH,newM] = [h + ~~((m + addM) /60), (m + addM) % 60]
  return timeForm(newH, newM);
}
function timeAdjust(time){
  let [h,m] = time.split(':').map(el=>+el)
  return timeForm(h % 24, m);
}
function sc(time,km){
  for(let i = 0; i <= 14 * 4; i++){
    let busStop = addTime('06:00', i * 15 + km * 2)
    if (busStop >= time)
      return timeAdjust(busStop);
  }
  return addTime('06:00', km * 2)
}
