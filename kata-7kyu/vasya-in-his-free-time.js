function CalculateString( n,  nums)
{
  return Math.abs(nums.split('').reduce((a,b)=>a - 1 + 2 * b,0));
}
