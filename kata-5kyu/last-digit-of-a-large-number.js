var lastDigit = function(str1, str2){  
  if(str2 == 0)  return 1;
  const k = +str1[str1.length - 1];
  const nums = [[0],[1],[6,2,4,8],[1,3,9,7],[6,4],[5],[6],[1,7,9,3],[6,8,4,2],[1,9]]
  const last2 = +((str2[str2.length - 2] | 0)  + str2[str2.length - 1]);
  return nums[k][last2 % nums[k].length];
}
