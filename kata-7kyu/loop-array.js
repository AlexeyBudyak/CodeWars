function loopArr(arr, direction, steps) {
  if(direction === 'right') 
    steps = arr.length - steps;
  return arr.slice(steps).concat(arr.slice(0,steps))
}
