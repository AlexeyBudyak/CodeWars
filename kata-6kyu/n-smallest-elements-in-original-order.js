function firstNSmallest(array, n){
  const smallArr = [...array].sort((a,b)=>a-b).slice(0,n);
  const num = smallArr[n-1];
  let numN = smallArr.filter(el=>el===num).length;
  const newArr = [];
  for(let i = 0; newArr.length < n ; i++)
    if(array[i] < num || (array[i]===num && numN)) {
      newArr.push(array[i]); 
      if(array[i]===num)  numN--;
    }
  return newArr;
}
