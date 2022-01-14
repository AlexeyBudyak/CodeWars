const codeCount = x => 
  x === null || /[^A-Za-z]/.test(x)  
      ? 0 : x.toUpperCase().split('').reduce((s,x)=>s+x.charCodeAt(0),0);

const compare = (s1, s2) => codeCount(s1) === codeCount(s2);
