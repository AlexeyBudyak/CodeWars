function isConstructable(a)
{
  for(let i = 0; i <= a ** 0.5; i++)
    if(i ** 2 + Math.round((a - i ** 2) ** 0.5) ** 2 === a )
      return true;
  return false;
}
