public class NotVisibleCubes {
  public Long notVisibleCubes(Long n) {
    if(n < 3)  return 0L;
    return (n-2)*(n-2)*(n-2);
  } 
}
