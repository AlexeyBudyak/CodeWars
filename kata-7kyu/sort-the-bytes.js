function sortBytes(uint32) {
  let bin = uint32.toString(2).padStart(32, "0")
  bin = [bin.slice(0,8), bin.slice(8,16), bin.slice(16,24), bin.slice(24)].sort((a,b)=>b-a).join('');
  return parseInt(bin, 2)
}
