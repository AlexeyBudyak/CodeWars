function uniTotal(str)
{
  return str.split('').reduce((sum,el)=>sum + el.charCodeAt(0),0);
}
