function chuckPushUps(string) {
  return  typeof string !== 'string' ? 'FAIL!!' :
          parseInt( string.split('')
               .filter(el=>'01 '.includes(el))
               .join('')
               .split(' ')
               .sort((a,b)=>b-a)[0], 2) 
          || (string.length ? "CHUCK SMASH!!" : 'FAIL!!')
}
