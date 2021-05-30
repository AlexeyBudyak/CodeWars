function lastSurvivor(str, arr) {
  while (arr.length)  {
    str = str.slice(0,arr[0]) + str.slice(arr[0]+1);
    arr.shift();
  }
  return str;
}
