function compare(arr1, arr2){
  if(arr1.length !== arr2.length)  return false;
  for(let i = 0; i < arr1.length; i++)
    arr2 = arr2.filter((el,j)=> el !== arr1[i] || arr2.indexOf(el)!==j);
  return !arr2.length
}

function recover(str){
  let s = '';
  const d = ['ZERO','ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE']
              .map(el=>el.split(''));
  str = str.split('');
  for(let i = 0; i < str.length - 2; i++)
    for(let j = 0; j < 10; j++)
      s+= (compare(d[j],str.slice(i,i + d[j].length))) ? j : ''; 
  return s || 'No digits found';
}
