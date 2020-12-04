function wave(str){
  return str.split('').map((el,i)=>
                        str.split('')
                        .map((l,j)=> i === j ? (l===' ') ? '*' : l.toUpperCase() : l )
                        .join(''))
                      .filter(el=>!el.includes('*'));
}
