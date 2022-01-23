function scoreTest(str, ...grade){
  grade[2]*= -1;
  return str.reduce((sum,x) => sum  + grade[x],0);
}
