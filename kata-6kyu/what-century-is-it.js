function whatCentury(year)
{
  let cent = ~~((year - 1) / 100) + 1;
  let d =  cent % 10;
  if(d > 3 || cent < 20)  d = 0;
  return cent + ['th', 'st', 'nd', 'rd'][d] ;
}
