var superSecretChars = [['a', '@'],['s', '$'],['o', '0'], ['h', '5'], ['x', '*']];
function createSSP(password){
  const top5 = superSecretChars.map(el => el[0]);
  return password.split('')
                 .map(el=>top5.includes(el.toLowerCase()) 
                      ? superSecretChars[top5.indexOf(el.toLowerCase())][1] : el)
                 .join('')
};
