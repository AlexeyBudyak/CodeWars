function abbreviate(str) {
  const divs = [' ', '-', ',']
  for(let i in divs)
    if(str.includes(divs[i]))  
      return str.split(divs[i]).map(el=>abbreviate(el)).join(divs[i]);
  return str.length < 4 ? str : str[0] + (str.length - 2) + str[str.length - 1];
}
