function unlock(str)
{
   const code = "22233344455566677778889999";
   return str.toLowerCase().split('').map(el => code[el.charCodeAt(0)-97]).join('');
}
