function bears(x, s){
  let bears = '';
  let couple = '';
  for(let i = 0; i < s.length; i++)
    if(s[i]!=='B' && s[i]!=='8')  couple = ''; 
    else if(couple.length) {
      if(couple !== s[i]) 
        bears+= (couple + s[i]), couple = '';       
    } else  couple = s[i];     
  return [bears, bears.length >= x * 2];
}
