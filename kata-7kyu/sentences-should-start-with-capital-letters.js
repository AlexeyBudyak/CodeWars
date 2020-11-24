function fix(paragraph){
  let copy = '';
  let up = true;
  for(let i = 0; i < paragraph.length; i++){
    if(up){
      copy += paragraph[i].toUpperCase();
      if(paragraph[i]!==' ')  up = false;
    }
    else{
      copy += paragraph[i];
      if(paragraph[i]==='.')  up = true;
    }
  }
  return copy;
}
