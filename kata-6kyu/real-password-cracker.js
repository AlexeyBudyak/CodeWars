var crypto = require('crypto')
function SHA1(data) {
  return crypto.createHash('sha1').update(data).digest('hex'); 
}

function passwordCracker(hash) {
  const abc = ['',...'abcdefghijklmnopqrstuvwxyz'.split('')];
  for(let n1 = 0; n1 <= 26; n1++)
  for(let n2 = 0; n2 <= 26; n2++)
  for(let n3 = 0; n3 <= 26; n3++)
  for(let n4 = 0; n4 <= 26; n4++)
  for(let n5 = 1; n5 <= 26; n5++)
  {
    const code = abc[n1] + abc[n2] + abc[n3] + abc[n4] + abc[n5];
    if(SHA1(code) === hash)
      return code;
  }
}
