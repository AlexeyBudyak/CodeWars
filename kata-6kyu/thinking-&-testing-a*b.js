function testIt(...c){
  return c.reduce((p, el) => p * (el+'').split('').reduce((sum,n)=>sum+ +n,0),1);
}
