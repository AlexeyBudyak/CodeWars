// return masked string
function maskify(cc) {
  let size = cc.length-4;
  if(size < 0)  size =0;
  return '#'.repeat(size) + cc.slice(-4);
}
