function replace(s){
  if(s==='') return '';
  const ch = {'!':'?','?':'!',' ':'*'};
  let ds = s.split('')
          .map((el,i)=>el !== s[i+1] ? (el + ' ') : el)
          .join('')
          .trim(' ')
          .split(' ')
  for(let i = 0; i < ds.length; i++){
    let j = ds.indexOf(ch[ds[i][0]].repeat(ds[i].length) );
    if(j > -1)  ds[i] = ds[i].replace(/./g,' '), ds[j] = ds[i];
  }
  return ds.join('')
}
