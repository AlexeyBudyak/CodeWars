function nextSmaller(n) {
  let digits = [...(n+'')];
  if(digits.every((x,i)=>!+i || +digits[i-1]  <= +x ))
    return -1;
  for(let i = digits.length - 2; i >= 0; i--){
    if(digits[i] > digits[i+1]){
      let head = digits.slice(0,i).join('');
      let tail = digits.slice(i).join('');
      let c = +tail[0] - 1;
      while(!tail.includes(c+'')) c--;
      let j = tail.indexOf(c+'');
      head+= c;
      tail = [...(tail.slice(0,j) + tail.slice(j+1))].sort((a,b)=>(b-a)).join('');
      return head[0] === '0' ? -1 : +(head + tail)
    }
  }
}
