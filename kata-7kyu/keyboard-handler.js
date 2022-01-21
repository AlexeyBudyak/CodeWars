function handler(key, isCaps = false, isShift = false) {
  const keys1 = "0123456789-=[];\\\"/,.`)!@#$%^&*(_+{}:|'?<>~";
  const keys2 = ")!@#$%^&*(_+{}:|'?<>~0123456789-=[];\\\"/,.`";
  if(key.length !== 1 || key !== key.toLowerCase())  return 'KeyError';
  if(keys1.includes(key)) return isShift ? keys2[keys1.indexOf(key)] : key;
  return isCaps + isShift === 1 ? key.toUpperCase() : key;
 
}
