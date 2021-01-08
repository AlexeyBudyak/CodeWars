function swap(arr, n, temp = arr[n]){
  arr[n] = arr[n + 1], arr[n + 1] = temp;
  return arr;
}

function arrange(strng) {
    let arr = strng.split(' ');
  for(let i = 0; i < arr.length - 1; i++)
    if((!(i % 2) && arr[i].length > arr[i+1].length) || (i % 2 && arr[i].length < arr[i+1].length))
      arr = swap(arr, i), i = 0;
  return arr.map((el,i) => (i % 2) ? el.toUpperCase() : el.toLowerCase()).join(' ');
}
