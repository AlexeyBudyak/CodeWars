function array(arr){
  if(arr.indexOf(',') === arr.lastIndexOf(',') || !arr.includes(','))  return null;
  let short =  arr.slice(arr.indexOf(',') + 1, arr.lastIndexOf(','));
  while(short.includes(',')){
   short=short.replace(',',' '); 
  }
  return short;  
}
