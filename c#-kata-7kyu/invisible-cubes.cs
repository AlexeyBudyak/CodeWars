using System;

public class Kata
{
  public static int NotVisibleCubes(int n)
  {
    if(n < 3)  return 0;
    return (n-2)*(n-2)*(n-2);
  }
}
