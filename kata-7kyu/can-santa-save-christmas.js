function seconds(time){
  let date = time.split(':');
  return +date[2] + +date[1] * 60 + +date[0] * 3600;
}
function determineTime(durations){
  return durations.reduce((acc, curr) => acc + seconds(curr), 0) <= 86400;
}
