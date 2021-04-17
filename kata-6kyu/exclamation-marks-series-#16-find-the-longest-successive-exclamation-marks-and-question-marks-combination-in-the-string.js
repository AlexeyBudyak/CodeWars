function find(s){
  //if(s === '' || !s.includes('!') || !s.includes('?'))  return '';
  let arr = [...s].map((el,i) => el !== s[i+1] ? el+' ' : el)
                  .join('')
                  .trim()
                  .split(' ');
  return arr.slice(1)
            .map((el,i)=>arr[i] + el)
            .reduce((max,el)=> el.length > max .length ? el : max,'');
}
