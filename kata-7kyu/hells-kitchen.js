function gordon(a){
  return a.split(' ')
          .map(word=>word.toUpperCase().replace(/[A]/g,'@').replace(/[EIOU]/g,'*') + '!!!!')
          .join(' ')
}
