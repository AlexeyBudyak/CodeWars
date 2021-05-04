const toUnderScore = name => {
  return  name.split('').map((el,i,arr)=> i && arr[i-1]!=='_' &&
                             ( el !== el.toLowerCase() 
                               || ('0123456789'.includes(el) && !'0123456789'.includes(arr[i-1]))
                             ) ? '_'+el : el).join(''); 
}
