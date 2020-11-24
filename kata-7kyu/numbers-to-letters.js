function switcher(x){
  let str = '';
  for(i = 0; i < x.length; i++){
    if(x[i] < 27)
      str+= String.fromCodePoint(123 - x[i] );

    switch(+x[i]){
        case 27: str+= '!'; break
        case 28: str+= '?'; break;
        case 29: str+= ' '; break;
    }
  }
  return str;
}
