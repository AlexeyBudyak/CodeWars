function solve(arr){
  let nums = [];
  let newArr = [];
  let max = Math.max(...arr);
  let index;
  for(let i = 0; i <= max; i++)  nums.push(0);
  arr.forEach(el => nums[el]++);
  while(nums.reduce( (a, b) => a + b)){
    max = Math.max(...nums);
    index = nums.indexOf(max);
    for(let i = 0; i < max; i++)  newArr.push(index);
    nums[index] = 0;
  }
  return newArr;
}
