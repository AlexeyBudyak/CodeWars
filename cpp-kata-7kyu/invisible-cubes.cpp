unsigned long long notVisibleCubes(unsigned int n) {
  if(n < 3)  return 0;
  unsigned long long c = 1; // (n - 2) * (n - 2) * (n - 2);
  int i;
  for(i = 0; i < 3; i++)  c*= (n-2);
  return c;
}
