function covfefe(str){
  const co = 'covfefe';
  let str2 = str.replace(/coverage/g, co);
  return (str === str2) ? str + ' ' + co : str2;
}
