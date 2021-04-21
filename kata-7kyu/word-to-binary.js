function wordToBin(str){
  return str.split('').map(el=>'0' + el.charCodeAt(0).toString(2));
}
