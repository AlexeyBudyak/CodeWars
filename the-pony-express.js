function riders(stations) {
  let riders = 1;
  let distance = 0;
  for(let i = 0; i < stations.length; i++)
    if(distance + stations[i] > 100)
      riders++, distance = stations[i];
    else distance+= stations[i];
  return riders;
}
