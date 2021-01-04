function timeConvert(num) { 
  return num < 0 ? '00:00' :
          (num < 600 ? '0' : '') + ~~(num/60) + ':' +
          (num % 60 < 10 ? '0' : '') + num % 60;
}
