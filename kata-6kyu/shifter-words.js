function shifter(s){
  return s.split(' ')
          .filter((el,i,arr)=>arr.indexOf(el) === i && el)
          .map(el=>+el.split('').every(e=>'HINOSXZMW'.includes(e)))
          .reduce((a,b)=>a+b,0)
}
