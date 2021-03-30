function factorial(n)
{
  if (n < 0 || n > 12) throw RangeError 
  return n < 2 ? 1 : n * factorial(n-1);
}

// function factorial(n)
// {
//   if(n < 0 || n > 12) throw new RangeError();
//   return [1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600][n];
// }
