function majority(arr) {
  if(arr.length == 0)  return null;
  if(arr.every(el => el == arr[0] )) return '' + arr[0];
  let data = arr.map(el => [el, arr.filter(word => word === el).length]).sort((a,b) => b[1] - a[1]);
  return data[0][1] === data[data[0][1]][1] ? null
                                            : '' + data[0][0];
}
