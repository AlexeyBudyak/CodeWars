function comes_after(str,l) {
  return str.split('')
            .filter((el,i,arr)=> i && el.match(/[a-z]/i) && arr[i-1].toLowerCase()===l.toLowerCase())
            .join('');
}
