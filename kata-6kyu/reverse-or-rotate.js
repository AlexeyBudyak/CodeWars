function cuTest( str){
  return !(str.split('').reduce((s,el)=> s + (+el) ** 3,0) % 2);
}
function reverseChunk(str){
  return str.split('').reverse().join('');
}
function rotateChunk(str){
  return str.split('').slice(1).join('') + str[0];
}
function revrot(str, sz) {
  if(sz <= 0 || sz > str.length)  return '';
  let chunk = '';
  const arr = [];
  for(let i = 0; i < str.length; i++){
    chunk+= str[i];
    if(chunk.length === sz)  
      arr.push(chunk),chunk = '';
  }
  return arr.map(el=>cuTest(el) ? reverseChunk(el) : rotateChunk(el)).join('');
}
