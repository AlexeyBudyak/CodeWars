intervalInsert=function(myl,interval){
  let [a,b] = [-1,-1];
  for(let i = 0; i < myl.length; i++)
    if((myl[i][0] >= interval[0] && myl[i][0] <= interval[1]) || 
       (myl[i][1] >= interval[0] && myl[i][1] <= interval[1]) ||
       (myl[i][0] <= interval[0] && myl[i][1] >= interval[1]))
          [a,b] = [a + 1 ? a : i, i];
  let result = [];
  for(let i = 0; i < myl.length; i++){
    if(a === -1 && interval[1] < myl[i][0])
      result.push(interval), a = -2;
    if( i < a || i > b) result.push(myl[i])
                  else  result.push([Math.min(myl[i][0],interval[0]), 
                                     Math.max(myl[b][1],interval[1])]), i = b;
    if((a === -1) && (i === myl.length - 1 || (myl[i+1][0] > interval[1] && myl[i][1] < interval[0])))
        result.push(interval), a = -2;
    
  }
  if(!result.length) result.push(interval);
  return result;
}
