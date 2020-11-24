function dontGiveMeFive(start, end)
{
  let s = 0;
  for( i = start; i <= end; i ++) 
    if( !(i + '').includes('5') ) s++;
  return s;
}
