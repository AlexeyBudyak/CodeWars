function evenNumbersBeforeFixed(s, f) {
  return s.includes(f) ? s.slice(0,s.indexOf(f)).filter(x=>x%2===0).length : -1;
}
