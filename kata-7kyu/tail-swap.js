function tailSwap(arr) {
  let code1 = arr[0].split(':');
  let code2 = arr[1].split(':');
  return [code1[0]+':'+code2[1],code2[0]+':'+code1[1]];
}
