function dirReduc(arr){
  arr = arr.join();
  let oldSize = arr.length + 1;
  while(oldSize > arr.length){
    oldSize=arr.length;
    arr = arr.replace(/WEST,EAST|EAST,WEST|NORTH,SOUTH|SOUTH,NORTH/,'');
    arr = arr.replace(/,,/,',');
  }
  arr= arr.split(',').filter(el=>el);
  return arr;
}
