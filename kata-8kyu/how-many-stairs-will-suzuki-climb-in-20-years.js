function stairsIn20(s){
  return s.map(day => day.reduce((sum,str)=>sum + str,0)).reduce((sum,str)=>sum + str,0) * 20;
}
