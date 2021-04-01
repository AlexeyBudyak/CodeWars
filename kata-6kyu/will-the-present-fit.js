function willFit(present, box){
  [present,box] = [present.sort((a,b)=>(b-a)), box.sort((a,b)=>(b-a))];
  return box.every((el,i) => el-1 > present[i])
}
