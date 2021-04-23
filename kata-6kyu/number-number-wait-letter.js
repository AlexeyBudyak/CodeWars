function doMath(s){
  const nums = s.split(' ')
           .map((x, i) => ({i: i, n: +x.replace(/[a-z]/gi, ''), c: x.replace(/\d/g, '').charCodeAt(0)}))
           .sort((x, y) => x.c-y.c || x.i-y.i)
           .map(x => x.n)
  console.log(nums);
  let result = nums[0];
  for (let i = 0; i < nums.length - 1; i++){
    console.log(result)
    result = eval(result + ['+','-','*','/'][i % 4] + nums[i+1])
  }
  return Math.round(result);
}
